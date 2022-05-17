import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [],
})
export class CountryInputComponent {
  public currentSearch = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  searchCountry() {
    this.onEnter.emit(this.currentSearch);
  }
}
