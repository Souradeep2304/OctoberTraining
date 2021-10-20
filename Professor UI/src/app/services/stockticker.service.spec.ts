import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { StockTickerService } from './stockticker.service';

describe('StockTickerService', () => {
  let service: StockTickerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        
        HttpClientTestingModule,
     
      ],
      declarations:[]
    })
    .compileComponents();
  }));
 
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockTickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
