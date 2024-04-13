import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 4 Weather App';
  cityDetails: any;
  getSelectedCity(evt) {
    this.cityDetails = evt;
  }
}
