import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router'
import { FormBuilder } from '@angular/forms';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { ToastrModule  } from 'ngx-toastr';
import { NotificationService } from '../../notification.service';
import { StockTickerComponent } from './stockticker.component';



describe('StockTickerComponent', () => {

  let component: StockTickerComponent;
  let fixture: ComponentFixture<StockTickerComponent>;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        RouterModule.forRoot([]),
        HttpClientTestingModule,
        ToastrModule.forRoot()
      ],
      providers: [FormBuilder
     ],
      declarations: [ 
        StockTickerComponent 
      ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(StockTickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
