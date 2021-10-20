import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit, NgZone } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormBuilder } from '@angular/forms';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { AddProfessorComponent } from './add-professor.component';

describe('AddProfessorComponent', () => {
  let component: AddProfessorComponent;
  let fixture: ComponentFixture<AddProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        RouterModule.forRoot([]),
        HttpClientTestingModule,
     
      ],
      providers: [FormBuilder],
      declarations: [ 
        AddProfessorComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
