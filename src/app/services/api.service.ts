import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../model/country.model'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get<Country[]>(`${this.api}/all`)
  }


  getCountryByName(name: string) {
    return this.http
      .get<Country[]>(`${this.api}/name/${name}`)
      .pipe(map(([res]) => res));
  }

  getCountriesByCodes(codes: string[]) {
    console.log(`${this.api}/alhpa?codes=${codes.join(';')}`);
    return this.http.get<Country[]>(
      `${this.api}/alpha?codes=${codes.join(';')}`
    );
  }
}
