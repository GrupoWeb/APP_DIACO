import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { BASE_URL_REST } from '../conc-virt-const'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
	private baseUrl:string=BASE_URL_REST+'tipos-catalogo';
	private httpOptions = {
	  headers: new HttpHeaders({
		'content-type':'application/json; charset=iso-8859-1'
	  })
	};
  constructor(private _http:HttpClient) { }
  
  private extractData(res: Response) {
	  let body = res;
	  return body || { };
  }
  
  getData(table){	  
	  var localURL=this.baseUrl+'/'+table;
	  //return this._http.get(localURL,this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
	  return this._http.get(localURL,this.httpOptions).pipe(map(this.extractData));
  }
    
  private handleError<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead
			// TODO: better job of transforming error for user consumption
			console.log('${operation} failed: ${error.message}');
			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
  }
    
  
}

