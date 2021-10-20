//import { Component, OnInit } from '@angular/core';
import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


import { StudentsService } from '../../../services/students.service';
import { AddStudentDto } from '../../../interfaces/students.Dto';


@Component({ 
  selector: 'app-add-professor',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student: AddStudentDto;
  studentForm: FormGroup;

  constructor(private route: ActivatedRoute, private studentsService: StudentsService,
    private ngZone: NgZone, private router: Router, private formBuilder: FormBuilder) {

    this.studentForm = this.formBuilder.group({
        name: '',
        RollNumber: '',
        Fees:'',
        Department: ''
    });
}

ngOnInit(): void {

}


onStudentAdd(studentData: AddStudentDto): void {

  this.studentsService.AddStudents(studentData).subscribe(res => {
     
      console.log('Student Added!')
      this.ngZone.run(() => this.router.navigateByUrl('/students'))
  });
}

}
