import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { StockTickerDto } from '../interfaces/stock.Dto';


//const baseUrl = "http://localhost:8080/api";
// const baseUrl = "#{apibook}#";
// const apiName = 'stock';
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//   }),
// };

@Injectable({
  providedIn: 'root',
})
export class StockTickerService {
  constructor(private httpClient: HttpClient) { }


  GetStock(id: string) {
    return this.httpClient
      .get<StockTickerDto>(`https://cloud.iexapis.com/stable/stock/${id}/quote?token=pk_062031d20883444f9ea74e2610fe2011`)
      .pipe(retry(1), catchError(this.errorHandler));
  }

  // Error handling
  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error 
      console.log("Inside Error Handling if");
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      console.log("Inside Error Handling else");
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
