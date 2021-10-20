import { Component, OnInit } from '@angular/core';

import { StudentsService } from '../../../services/students.service';
import { StudentDto } from '../../../interfaces/students.Dto';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
})
export class StudentListComponent implements OnInit {
  studentsList: StudentDto[] = [];

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.loadAllStudents();
  }

  loadAllStudents() {
    this.studentsService.GetAllStudents()
    .subscribe((data: StudentDto[]) => {
      this.studentsList = data;
      console.log(this.studentsList);
    });
  }
}
