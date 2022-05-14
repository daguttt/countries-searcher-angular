import { Component } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  public currentSearch: string = '';
  searchCountry() {
    console.log(this.currentSearch);
  }
}
