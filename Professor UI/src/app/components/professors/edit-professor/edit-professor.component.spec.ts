import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit, NgZone } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormBuilder } from '@angular/forms';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { EditProfessorComponent } from './edit-professor.component';

describe('EditProfessorComponent', () => {
  let component: EditProfessorComponent;
  let fixture: ComponentFixture<EditProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        RouterModule.forRoot([]),
        HttpClientTestingModule,
     
      ],
      providers: [FormBuilder],
      declarations: [ EditProfessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
