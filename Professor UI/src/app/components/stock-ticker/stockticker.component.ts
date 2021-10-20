import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { StockTickerDto, SymbolDto } from '../../interfaces/stock.Dto';
import { StockTickerService } from '../../services/stockticker.service';
import { NotificationService } from '../../notification.service';
import { catchError, elementAt } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';



@Component({
    selector: 'app-stockticker',
    templateUrl: './stockticker.component.html',
    styleUrls: ['./stockticker.component.css'],
})
export class StockTickerComponent implements OnInit {
    stockTicker: StockTickerDto;
    stockTickerList: StockTickerDto[] = [];
    stocktickerForm: FormGroup;
    stockCarouselList: StockTickerDto[] = [];
    stockTableList: StockTickerDto[] = [];
    stockDemoList: StockTickerDto[] = [];

    constructor(private route: ActivatedRoute, private stockTickerService: StockTickerService,
        private ngZone: NgZone, private router: Router, private formBuilder: FormBuilder,  private notifyService : NotificationService) {

      
        this.stocktickerForm = this.formBuilder.group({
            stockSymbol: ''
        });
       
    }

    ngOnInit(): void {
        this.stockTableList=[];
        this.initializeStocks();
        setInterval(()=> { this.initializeStocks(),this.refreshStocks() },  10000);
     
        
    }
    initializeStocks(){
        this.stockTickerService.GetStock("tsla").subscribe((data: StockTickerDto) => {
            this.stockCarouselList[0]=data
        });
        this.stockTickerService.GetStock("ibm").subscribe((data: StockTickerDto) => {
            this.stockCarouselList[1]=data
        });
        this.stockTickerService.GetStock("aapl").subscribe((data: StockTickerDto) => {
            this.stockCarouselList[2]=data
        });
        this.stockTickerService.GetStock("amzn").subscribe((data: StockTickerDto) => {
            this.stockCarouselList[3]=data
        });

    }

    refreshStocks()
    {
        console.log("Inside Refresh Stocks")
        this.stockTickerList.forEach((element,index) => {
            this.stockTickerService.GetStock(element.symbol).subscribe((data: StockTickerDto) => {      
                this.stockTickerList[index]=data         
        });
        console.log(this.stockTickerList[index])
        });

    }

    onStockGet(stockSearch: SymbolDto): void {
       this.stockTickerService.GetStock(stockSearch.stockSymbol).pipe(catchError(err => {
            //   console.error(err.message);
               if(err){
                   console.log(err,"Error");
                   this.notifyService.showWarning("Please Enter a valid symbol","Warning!!!");
               }
               return throwError("error thrown 1")
               }))
            .subscribe((data: StockTickerDto) => {
                this.stockTicker = data;
                console.log(this.stockTicker);
                this.stockTickerList[this.stockTickerList.length]=data
            });
    }

}