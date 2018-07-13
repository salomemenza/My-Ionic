import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

/*
  Generated class for the RestProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class RestProvider {
  private apiUrl = 'https://restcountries.eu/rest/v2/all';
  private apiUrl2 = 'http://desarrollo6.acfarma.com/example/rest_api';

  private headers;

  constructor(public http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers =  this.headers.set("X-API-KEY", "1cc99d86-bdae-4258-9f51-d0db0f2ae327");
    console.log('Hello RestProvider Provider: '+this.headers.get("X-API-KEY"));
  }

  getCountries(): Observable<{}> {
    return this.http.get(this.apiUrl).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl2+'/usuario',{headers: this.headers}).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  private handleError (error: Response | any) {
    debugger;
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
