import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  public currentSearch: string = '';
  public hasError: boolean = false;
  public countries: Country[] = [];
  constructor(private countryService: CountryService) {}
  searchCountry(currentSearch: string) {
    this.hasError = false;
    this.currentSearch = currentSearch;
    this.countryService.searchByContry(this.currentSearch).subscribe(
      (countries) => {
        this.countries = countries;
      },
      (err): void => {
        this.hasError = true;
        this.countries = [];
        console.error(err);
      }
    );
  }
}
