import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { StudentsService } from '../../../services/students.service';
import { AddStudentDto, StudentDto, EditStudentDto } from '../../../interfaces/students.Dto';


@Component({
    selector: 'app-edit-student',
    templateUrl: './edit-student.component.html',
    styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

    student: StudentDto;
    studentForm: FormGroup;

    constructor(private route: ActivatedRoute, private studentsService: StudentsService,
        private ngZone: NgZone, private router: Router, private formBuilder: FormBuilder) {

        this.studentForm = this.formBuilder.group({
            StudentId: '',
            name: '',
            department: '',
            Fees: 0.0,
            professorId: '',
            rollNumber: ''
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

    /* For Modify */
    onStudentEdit( id:string, studentData: EditStudentDto): void {
        console.warn(`Student Edit Request for Id: ${id}`);

        this.studentsService.EditStudentById(studentData).subscribe(res => {
            console.log('Student Modified!')
            this.ngZone.run(() => this.router.navigateByUrl('/students'))
        });
    }

}
