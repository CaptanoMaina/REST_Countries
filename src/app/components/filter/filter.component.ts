import { Component } from '@angular/core';
import { faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  showOptions = false;
  faSearch = faSearch;
  faChevronDown = faChevronDown;


  @Input()
  placeholder?: string;

  @Input()
  values?: string[];

  @Input()
  value?: string;

  @Output()
  valueChange: EventEmitter<string> = new EventEmitter();

  select(value: string) {
    this.valueChange.emit(value);
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }
}


