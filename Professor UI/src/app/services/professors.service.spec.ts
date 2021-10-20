
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { ProfessorsService } from './professors.service';

describe('ProfessorsService', () => {
  let service: ProfessorsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        
        HttpClientTestingModule,
     
      ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
