import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ThemeService, Theme } from './services/theme.service'

import { faMoon } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  faMoon = faMoon;

  theme!: Observable<Theme>;
  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.theme = this.themeService.mode$;
  }
  toggleTheme() {
    this.themeService.toggleMode();
  }

}
