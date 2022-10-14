import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [],
})
export class ByCapitalComponent {
  currentSearch: string = '';
  hasError: boolean = false;
  countries: Country[] = [];

  showSuggestions: boolean = false;
  countriesToSuggest: Country[] = [];

  constructor(private countryService: CountryService) {}

  searchCountry(currentSearch: string) {
    this.hasError = false;
    this.currentSearch = currentSearch;
    this.countryService.searchByCapital(this.currentSearch).subscribe(
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

  getSuggestions(currentSearch: string) {
    // To show as a default at the suggestions
    this.currentSearch = currentSearch;
    this.showSuggestions = true;

    this.countryService
      .searchByCapital(currentSearch)
      .subscribe(
        (countries) => (this.countriesToSuggest = countries.slice(0, 5))
      );
  }
}
