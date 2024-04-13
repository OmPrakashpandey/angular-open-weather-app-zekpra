import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})
export class CityComponent {
  @Input() cityDetails: any;
  constructor() {}
  ngOnChanges() {}
  getCity(evt){

  }
}
