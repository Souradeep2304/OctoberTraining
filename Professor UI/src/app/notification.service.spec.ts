import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { ToastrModule  } from 'ngx-toastr';
import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        
        HttpClientTestingModule,
        ToastrModule.forRoot()
      ],
      providers: [
   
      ]
      
    })
    .compileComponents();
  }));
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
