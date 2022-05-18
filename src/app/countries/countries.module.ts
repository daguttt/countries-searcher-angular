import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByContinentComponent } from './pages/by-region/by-continent.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ShowCountryComponent } from './pages/show-country/show-country.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryInputComponent } from './components/country-input/country-input.component';
import { CountryInputSuggestionsComponent } from './components/country-input-suggestions/country-input-suggestions.component';

@NgModule({
  declarations: [
    ByCapitalComponent,
    ByContinentComponent,
    ByCountryComponent,
    ShowCountryComponent,
    CountryTableComponent,
    CountryInputComponent,
    CountryInputSuggestionsComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [
    ByCapitalComponent,
    ByContinentComponent,
    ByCountryComponent,
    ShowCountryComponent,
  ],
})
export class CountriesModule {}
