import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable, forkJoin, of } from 'rxjs';
import { Country, Currencies, Languages } from 'src/app/model/country.model';
import { ActivatedRoute } from '@angular/router';
import { tap, mergeMap } from 'rxjs/operators';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  country$!: Observable<Country>;
  borderCountries$!: Observable<Country[]>;

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.country$ = this.api.getCountryByName(params['country']).pipe(
        tap((res) => console.log(res)),
        mergeMap((res) => {
          this.borderCountries$ = this.api.getCountriesByCodes(res.borders!);

          return of(res);
        })
      );
    });
  }

  displayCurrencies(currencies: Currencies[]) {
    return currencies.map((currencies) => currencies!).join(', ');
  }

  displayLanguages(languages: Languages[]) {
    return languages.map((languages) => languages!).join(', ');
  }
}