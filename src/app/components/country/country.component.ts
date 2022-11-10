import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Country } from 'src/app/model/country.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countries$!: Observable<Country[]>;
  constructor(private api: ApiService) { }
  ngOnInit(): void {
    this.countries$ = this.api.getCountries();
  }
}
