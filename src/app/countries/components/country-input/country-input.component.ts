import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [],
})
export class CountryInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  public currentSearch = '';
  public debouncer: Subject<string> = new Subject();

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((search) => {
      console.log(search);
      this.onDebounce.emit(search);
    });
  }

  searchCountry() {
    this.onEnter.emit(this.currentSearch);
  }
  onInput() {
    this.debouncer.next(this.currentSearch);
  }
}
