import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditProfessorComponent } from './components/professors/edit-professor/edit-professor.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { ProfessorsListComponent } from './components/professors/list-professor/list-professors.component';
import { RemoveProfessorComponent } from './components/professors/remove-professor/remove-professor.component';
import { AddProfessorComponent } from './components/professors/add-professor/add-professor.component';
import { BookstoreListComponent } from './components/bookstore/list-books/list-books.component';
import { BookstoreAddComponent } from './components/bookstore/add-books/add-books.component';
import { EditBookComponent } from './components/bookstore/edit-books/edit-books.component';
import { RemoveBookstoreComponent } from './components/bookstore/remove-books/remove-books.component';
import { StockTickerComponent } from './components/stock-ticker/stockticker.component';
import { StudentListComponent } from './components/students/students-list/students-list.component';
import { AddStudentComponent } from './components/students/add-student/add-student.component';
import { RemoveStudentComponent } from './components/students/remove-student/remove-student.component';
import { EditStudentComponent } from './components/students/edit-student/edit-student.component';



const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'professors', component: ProfessorsListComponent },
  { path: 'add-professor', component: AddProfessorComponent },
  { path: 'edit-professor/:professorId', component: EditProfessorComponent },
  { path: 'remove-professor/:professorId', component: RemoveProfessorComponent },
  { path: 'books', component: BookstoreListComponent },
  { path: 'addbooks', component: BookstoreAddComponent },
  { path: 'editbooks/:_id', component: EditBookComponent },
  { path: 'delbooks/:_id', component: RemoveBookstoreComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'remove-student/:studentId', component: RemoveStudentComponent },
  { path: 'edit-student/:studentId', component: EditStudentComponent },
  { path: 'stockticker', component: StockTickerComponent },
  { path: 'pagenotfound', component: PageNotfoundComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'pagenotfound', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
