import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  public currentSearch: string = '';
  public hasError: boolean = false;
  constructor(private countryService: CountryService) {}
  searchCountry() {
    this.hasError = false;
    this.countryService.searchByContry(this.currentSearch).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        this.hasError = true;
        console.error(err);
      }
    );
  }
}
