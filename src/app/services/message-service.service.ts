import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cat {
  name: string;
}

export interface datos{
  message: string;
  number: string;
}

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  url: string = 'https://api.twilio.com/2010-04-01/Accounts/AC4123e2eaf9bd0072a095d3fc583c0171/Messages.json';


  constructor(private _http: HttpClient, ) { }

  getAllCats(): Observable<Cat[]> {
    return this._http.get<Cat[]>('http://localhost:57984/api/WMessage');
  }

  getCat(name: string): Observable<Cat> {
    return this._http.get<Cat>('http://localhost:57984/api/WMessage/' + name);
  }

  insertCat(cat: Cat): Observable<Cat> {
    return this._http.post<Cat>('http://localhost:57984/api/WMessage/', cat);
  }

  enviaDatos(Datos: datos): Observable<datos> {
    return this._http.post<datos>('http://localhost:57984/api/WMessage/', Datos);
  }

  insertCatFunciona(value:string){
    return this._http.post('http://localhost:57984/api/WMessage', {name:"Leon"});
  }

  POST(Datos: datos){
    return this._http.post<datos>('http://localhost:57984/api/WMessage', Datos);
  }

  updateCat(cat: Cat): Observable<void> {
    return this._http.put<void>('http://localhost:8000/api/cats/' + cat.name, cat);
  }

  deleteCat(name: string) {
    return this._http.delete('http://localhost:8000/api/cats/' + name);
  }

}
