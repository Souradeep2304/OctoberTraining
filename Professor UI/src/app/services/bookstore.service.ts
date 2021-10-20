import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { BookstoreDto, AddBookstoreDto } from '../interfaces/bookstore.Dto';

const baseUrl = "http://localhost:8080/api";
//const baseUrl = "https://bookstore-api-stage.azurewebsites.net/api";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class BookstoreService {
  constructor(private httpClient: HttpClient) {}

  // GET All Books
  GetAllBooks(): Observable<BookstoreDto[]> {
    return this.httpClient
      .get<BookstoreDto[]>(`${baseUrl}/books`)
      .pipe(retry(1), catchError(this.errorHandler));
  }

  //Add Books
  AddBooks(bookstore: AddBookstoreDto): Observable<AddBookstoreDto> {
    return this.httpClient.post<AddBookstoreDto>(`${baseUrl}/books`, JSON.stringify(bookstore), httpOptions)
        .pipe(
            retry(1),
            catchError(this.errorHandler)
        )
}

EditBookById(id: string, bookstore: BookstoreDto) {
  console.log(
    `Update Book request received for ${id} ${JSON.stringify(bookstore)}`
  );
  return this.httpClient
    .put<BookstoreDto>(
      `${baseUrl}/books/${id}`,
      JSON.stringify(bookstore),
      httpOptions
    )
    .pipe(retry(1), catchError(this.errorHandler));
}

GetBookById(id: string): Observable<BookstoreDto> {
  console.log(`Get Book request received for ${id}`);
  return this.httpClient
    .get<BookstoreDto>(`${baseUrl}/books/${id}`)
    .pipe(retry(1), catchError(this.errorHandler));
}

RemoveBookById(id: string) {
  console.log(`Removed Book request received for ${id}`);
  return this.httpClient.delete<BookstoreDto>(`${baseUrl}/books/${id}`, httpOptions)
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
