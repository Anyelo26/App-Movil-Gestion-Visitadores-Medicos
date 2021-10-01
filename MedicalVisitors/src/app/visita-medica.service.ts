import { Injectable } from '@angular/core';
import { Visitor } from './visitor';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitaMedicaService {

  url:string="http://127.0.0.1:5000/curso/";

  constructor(private http:HttpClient) { }

  crearCurso(visitante:Visitor):Observable<any>{
    console.log(visitante);
    /*let rutacrear=this.url;
    return this.http.post<Visitor>(rutacrear,visitante);*/
    return
  }
}

