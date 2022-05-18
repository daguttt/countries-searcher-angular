import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-input-suggestions',
  templateUrl: './country-input-suggestions.component.html',
  styles: [],
})
export class CountryInputSuggestionsComponent {
  @Input() countries: Country[] = [];
  @Input() currentSearch: string = '';
  @Output() onSearchCurrent: EventEmitter<string> = new EventEmitter();
  searchCurrent(): void {
    this.onSearchCurrent.emit(this.currentSearch);
  }
}
