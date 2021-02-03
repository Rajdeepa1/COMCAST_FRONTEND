import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable()
export class RunScriptsService {
  httpGetOptions: any;
  constructor(private http: HttpClient) { 
    this.httpGetOptions = {
      headers: new HttpHeaders()
    };
  }

  configUrl = '';
  

    getConfig(l:string,ngResponseType:any,url:string) {
       console.log(l)
       //console.log('common service Post API Data Obj ', obj);
      this.httpGetOptions = {
        // headers: new HttpHeaders(this.setHttpHd(obj.httpOptions))
        headers: new HttpHeaders('')
      };

      if (ngResponseType) {
      this.httpGetOptions.responseType = ngResponseType;
    }
       this.configUrl = url+l;
        return this.http.get(this.configUrl,this.httpGetOptions);
        
    }

}