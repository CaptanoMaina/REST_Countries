import { Component, OnInit } from '@angular/core';
import { faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';

import { ApiService } from 'src/app/services/api.service';
import { Country } from 'src/app/model/country.model';

const REGION_OPTIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private source!: Country[];

  searchFilter!: string;
  regionFilter!: string;
  regionOptions = REGION_OPTIONS;
  faSearch = faSearch;
  faChevronDown = faChevronDown;

  constructor(private api: ApiService) { }




  ngOnInit(): void {
    this.api.getCountries().subscribe((countries) => {
      this.source = countries;
    });
  }

  get countries() {
    return this.source
      ? this.source
        .filter((country) =>
          this.searchFilter
            ? country.name.official.toLowerCase()
              .includes(this.searchFilter.toLowerCase())
            : country
        )
        .filter((country) =>
          this.regionFilter
            ? country.region.includes(this.regionFilter)
            : country
        )
      : this.source;
  }



}

