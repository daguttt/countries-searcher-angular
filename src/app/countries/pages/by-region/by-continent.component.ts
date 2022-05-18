import { Component, OnInit } from '@angular/core';

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
}
