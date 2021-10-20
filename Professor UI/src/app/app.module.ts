import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfessorsListComponent } from './components/professors/list-professor/list-professors.component';
import { EditProfessorComponent } from './components/professors/edit-professor/edit-professor.component';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
const routes: Routes = [

];
@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    SideNavbarComponent,
    PageNotfoundComponent,
    FooterComponent,
    DashboardComponent,
    ProfessorsListComponent,
    EditProfessorComponent,
    RemoveProfessorComponent,
    AddProfessorComponent,
    BookstoreListComponent,
    BookstoreAddComponent,
    EditBookComponent,
    RemoveBookstoreComponent,
    StockTickerComponent,
    StudentListComponent,
    AddStudentComponent,
    RemoveStudentComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: true }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
