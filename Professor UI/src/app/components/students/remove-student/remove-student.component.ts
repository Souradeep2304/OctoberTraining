import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


import { StudentsService } from '../../../services/students.service';
import { AddStudentDto, StudentDto } from '../../../interfaces/students.Dto';

@Component({
  selector: 'app-remove-student',
  templateUrl: './remove-student.component.html',
  styleUrls: ['./remove-student.component.css']
})
export class RemoveStudentComponent implements OnInit {

  student: StudentDto;
  studentForm: FormGroup;

  constructor(private route: ActivatedRoute, private studentsService: StudentsService,
    private ngZone: NgZone, private router: Router, private formBuilder: FormBuilder) {

    this.studentForm = this.formBuilder.group({
      studentId: '',
      Department: '',
      ProfessorId:'',
      Fees: '',
      name: '',
      RollNumber: ''
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.studentsService.GetStudentById(params.get('studentId'))
        .subscribe((student: StudentDto) => {
          this.student = student;
          console.log(`${this.student.name}`);
        });
    });
  }

  onStudentRemove(id: string): void {
    console.warn(`Product Delete Request for Id: ${id}`);

    this.studentsService.RemoveStudentById(id).subscribe(res => {
        console.log('Student Deleted!')
        this.ngZone.run(() => this.router.navigateByUrl('/students'))
    });
}

}
