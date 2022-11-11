import { Component, OnInit } from '@angular/core';
import { faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faSearch = faSearch;
  faChevronDown = faChevronDown;

  constructor() { }

  ngOnInit(): void {
  }

}
