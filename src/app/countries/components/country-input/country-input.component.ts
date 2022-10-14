import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  Input,
  OnDestroy,
} from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [],
})
export class CountryInputComponent implements OnInit, OnDestroy {
  currentSearch = '';

  @Input() placeholder: string = '';

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();
  debouncerSubscription!: Subscription;

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(debounceTime(300))
      .subscribe((search) => {
        this.onDebounce.emit(search);
      });
  }

  ngOnDestroy(): void {
    console.log('Closing subscription');
    this.debouncerSubscription.unsubscribe();
  }

  searchCountry() {
    this.onEnter.emit(this.currentSearch);
  }

  onInput() {
    this.debouncer.next(this.currentSearch);
  }
}
