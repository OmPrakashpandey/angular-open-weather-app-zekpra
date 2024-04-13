import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  APIKey: string = '6492527f849e5034d485df6b5981d407';

  constructor(private http: HttpClient) {}

  getData(data) {
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        data.city +
        '&appid=' +
        this.APIKey
    );
  }
  getCity(): Observable<any> {
    // get all the cities details from the backend debugger.json file

    return this.http
      .get<any>('./assets/db.json')
      .pipe(map((res) => res.cities));

    // .toPromise()
    // .then(res => res.data)
    // .then(data => {
    //   return data;
    // });
    // return of()
  }
}
