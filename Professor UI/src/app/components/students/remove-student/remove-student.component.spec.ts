import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit, NgZone } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormBuilder } from '@angular/forms';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { RemoveStudentComponent } from './remove-student.component';

describe('RemoveStudentComponent', () => {
  let component: RemoveStudentComponent;
  let fixture: ComponentFixture<RemoveStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        RouterModule.forRoot([]),
        HttpClientTestingModule,
     
      ],
      providers: [FormBuilder],
      declarations: [ RemoveStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
