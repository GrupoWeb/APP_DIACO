import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { FrmMainParam, FrmMainFD, BASE_URL_REST } from "../atencion-consumidor-const";
import { SubmitFormService } from "../shared/submit-form.service";

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
  constructor(private _http:HttpClient, private _submitFormService:SubmitFormService) { }
  
  private extractData(res: Response) {
	  let body = res;
	  return body || { };
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
  
  getPuestos(){	  
	  var localURL=this.baseUrl+'/puesto/'+this._submitFormService.Get_token();
	  console.log(localURL);
	  return this._http.get(localURL,this.httpOptions).pipe(map(this.extractData));
	  //return this._http.get(localURL,this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  
  getPortalLinks(){	  
	  var localURL=this.baseUrl+'/portallinks';
	  console.log(localURL);
	  return this._http.get(localURL,this.httpOptions).pipe(map(this.extractData));
	  //return this._http.get(localURL,this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  
  getData(table){	  
	  var localURL=this.baseUrl+'/'+table+'/'+this._submitFormService.Get_token();
	  return this._http.get(localURL,this.httpOptions).pipe(map(this.extractData));
	  //return this._http.get(localURL,this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  
  getDptoInternoMovHacia(){	  
	  var localURL=this.baseUrl+'/dpto_interno/mov_hacia/'+this._submitFormService.Get_token();
	  return this._http.get(localURL,this.httpOptions).pipe(map(this.extractData));
	  //return this._http.get(localURL,this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }

  getDptoInternoMovHaciaVyV(){	  
	  var localURL=this.baseUrl+'/dpto_interno/mov_haciaVyV/'+this._submitFormService.Get_token();
	  return this._http.get(localURL,this.httpOptions).pipe(map(this.extractData));
	  //return this._http.get(localURL,this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }

  getDptoInternoMovHaciaJur(){	  
	  var localURL=this.baseUrl+'/dpto_interno/mov_haciaJur/'+this._submitFormService.Get_token();
	  return this._http.get(localURL,this.httpOptions).pipe(map(this.extractData));
	  //return this._http.get(localURL,this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }

  getDptoInternoMovHaciaSinJefe(){	  
	  var localURL=this.baseUrl+'/dpto_interno/mov_hacia_sinjefe/'+this._submitFormService.Get_token();
	  return this._http.get(localURL,this.httpOptions).pipe(map(this.extractData));
	  //return this._http.get(localURL,this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }


  getResultadoAudiencia(id_resultado){	  
	  var localURL=this.baseUrl+'/res_aud/'+id_resultado+'/'+this._submitFormService.Get_token();
	  return this._http.get(localURL,this.httpOptions).pipe(map(this.extractData));
	  //return this._http.get(localURL,this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
   
  errorHandler(error:Response){
	return Observable.throw(error||"Server Error");
  }
    
  
}

