import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  public currentSearch: string = '';
  constructor(private countryService: CountryService) {}
  searchCountry() {
    this.countryService.searchByContry(this.currentSearch).subscribe((res) => {
      console.log(res);
    });
  }
}
