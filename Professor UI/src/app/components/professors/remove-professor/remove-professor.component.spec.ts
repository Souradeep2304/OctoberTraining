import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit, NgZone } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormBuilder } from '@angular/forms';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { RemoveProfessorComponent } from './remove-professor.component';

describe('RemoveProfessorComponent', () => {
  let component: RemoveProfessorComponent;
  let fixture: ComponentFixture<RemoveProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        RouterModule.forRoot([]),
        HttpClientTestingModule,
     
      ],
      providers: [FormBuilder],
      declarations: [ RemoveProfessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
