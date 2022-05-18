import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-continent',
  templateUrl: './by-continent.component.html',
  styles: [],
})
export class ByContinentComponent {
  public continents: string[] = [
    'africa',
    'americas',
    'asia',
    'europe',
    'oceania',
  ];
  public activeContinent: string = '';
  public countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  updateActiveContinent(continent: string): void {
    if (this.activeContinent === continent) return;
    this.activeContinent = continent;
    this.countryService
      .searchByContinent(continent)
      .subscribe((countries) => (this.countries = countries));
  }
}
