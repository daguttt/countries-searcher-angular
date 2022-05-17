import { Component } from '@angular/core';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [],
})
export class CountryInputComponent {
  public currentSearch = '';
  searchCountry() {
    console.log(this.currentSearch);
  }
}
