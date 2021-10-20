import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { StudentDto,AddStudentDto, EditStudentDto } from '../interfaces/students.Dto';

//const baseUrl = 'https://localhost:44340/api';
const baseUrl = "https://students-api-stage.azurewebsites.net/api";
const apiName = 'students';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private httpClient: HttpClient) {}

  // GET All Students
  GetAllStudents(): Observable<StudentDto[]> {
    return this.httpClient
    .get<StudentDto[]>(`${baseUrl}/${apiName}`)
      .pipe(retry(1), catchError(this.errorHandler));
  }

  //Add Students
  AddStudents(student: AddStudentDto): Observable<AddStudentDto> {
    return this.httpClient.post<AddStudentDto>(`${baseUrl}/students`, JSON.stringify(student), httpOptions)
        .pipe(
            retry(1),
            catchError(this.errorHandler)
        )
}

EditStudentById( student: EditStudentDto) {
  console.log(
    `Update student request received for ${JSON.stringify(student)}`
  );
  return this.httpClient
    .put<EditStudentDto>(
      `${baseUrl}/students`,
      JSON.stringify(student),
      httpOptions
    )
    .pipe(retry(1), catchError(this.errorHandler));
}

GetStudentById(id: string): Observable<StudentDto> {
  console.log(`Get Student request received for ${id}`);
  return this.httpClient
    .get<StudentDto>(`${baseUrl}/students/${id}`)
    .pipe(retry(1), catchError(this.errorHandler));
}

RemoveStudentById(id: string) {
  console.log(`Removed Student request received for ${id}`);
  return this.httpClient.delete<StudentDto>(`${baseUrl}/students/${id}`, httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
}

  // Error handling
  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
