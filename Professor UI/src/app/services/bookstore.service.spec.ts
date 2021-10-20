import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { BookstoreService } from './bookstore.service';

describe('BookstoreService', () => {
  let service: BookstoreService;
  let fixture: ComponentFixture<BookstoreService>;

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
    service = TestBed.inject(BookstoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
