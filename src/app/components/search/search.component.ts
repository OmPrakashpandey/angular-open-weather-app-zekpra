import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { map } from 'rxjs/operators';
import { WeatherService } from '../../services/weather.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() selectedCity = new EventEmitter<any>();
  cityDetails: any;
  search = false;
  //selectedCity: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}
  changeCity(evt) {
    this.getCity(evt.target.value);
  }
  getCity(cityname: String) {
    this.search = true;
    return this.weatherService.getCity().subscribe((res) => {
      this.cityDetails = res.find((item) => {
        return item['city'] == cityname;
      });
      this.selectedCity.emit(this.cityDetails);
      //   })
      // )
      // .subscribe((city: any) => {
      //   console.log('FF', city);
      //   if (city && city.length) this.selectedCity.emit(city[0]);
      //   else this.selectedCity.emit({});
    });
    /* define function to get all the city details from backend using service function and then emit
     the city details to the app component that matches the cityname entered by user in input */
  }
}
