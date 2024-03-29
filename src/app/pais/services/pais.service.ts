
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiKey:string= `https://restcountries.eu/rest/v2`;

  constructor(private http:HttpClient) { }

  buscarPais(termino:string):Observable<Country[]>{
    const url= `${this.apiKey}/name/${termino}`;
    return this.http.get<Country[]>(url); 
  }


}
