import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { WeatherService } from 'src/app/services/weather.service';

import { SearchComponent } from './search.component';

const citydata = [
  {
    id: 1,
    city: 'chennai',
    country: 'India',
    weather: [
      {
        date: '2022-08-09',
        temperature: 31.105,
        weather_name: 'Sunny',
      },
      {
        date: '2022-08-10',
        temperature: 32.1,
        weather_name: 'Sunny',
      },
      {
        date: '2022-08-11',
        temperature: 27.53,
        weather_name: 'Windy',
      },
      {
        date: '2022-08-12',
        temperature: 22.21,
        weather_name: 'Cloudy',
      },
    ],
  },

  {
    id: 2,
    city: 'Mumbai',
    country: 'India',
    weather: [
      {
        date: '2022-08-09',
        temperature: 30.45,
        weather_name: 'Sunny',
      },
      {
        date: '2022-08-10',
        temperature: 26.01,
        weather_name: 'Rainy',
      },
      {
        date: '2022-08-11',
        temperature: 24.89,
        weather_name: 'Cloudy',
      },
      {
        date: '2022-08-12',
        temperature: 31.7,
        weather_name: 'Windy',
      },
    ],
  },
  {
    id: 3,
    city: 'Bangalore',
    country: 'India',
    weather: [
      {
        date: '2022-08-09',
        temperature: 31.105,
        weather_name: 'Sunny',
      },
      {
        date: '2022-08-10',
        temperature: 32.1,
        weather_name: 'Sunny',
      },
      {
        date: '2022-08-11',
        temperature: 27.53,
        weather_name: 'Windy',
      },
      {
        date: '2022-08-12',
        temperature: 22.21,
        weather_name: 'Cloudy',
      },
    ],
  },
];

class MockService {
  public getCity() {
    return of(citydata);
  }
}

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let service: WeatherService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule],
      providers: [{ provide: WeatherService, useClass: MockService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(WeatherService);
    fixture.detectChanges();
  });

  it('should check form getCity()', async(() => {
    const spy1 = spyOn(service, 'getCity').and.callThrough();
    const spy2 = spyOn(component.selectedCity, 'emit').and.callThrough();
    let cityInput = fixture.nativeElement.querySelector('input');
    expect(cityInput).toBeTruthy();
    cityInput.value = 'Delhi';
    component.getCity('Delhi');
    fixture.detectChanges();
    expect(spy1).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
  }));

  it('should check the no ciy message', () => {
    component.search = true;
    component.cityDetails = null;
    fixture.detectChanges();

    const message = fixture.nativeElement.querySelector('p');
    expect(message.textContent as String).toBe('No city found!');
  });
});
