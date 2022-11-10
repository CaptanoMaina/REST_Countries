import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../model/country.model'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get<Country[]>(`${this.api}/all`)
  }
}
