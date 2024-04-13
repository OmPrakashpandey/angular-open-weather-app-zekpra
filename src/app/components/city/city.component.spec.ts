import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CityComponent } from './city.component';
let citydata = {
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
};

describe('CityComponent', () => {
  let component: CityComponent;
  let fixture: ComponentFixture<CityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CityComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityComponent);
    component = fixture.componentInstance;
    component.cityDetails = citydata;
    fixture.detectChanges();
  });

  it('should check the ngOnChanges ()', () => {
    component.ngOnChanges();
    expect(component.cityDetails).not.toBeNull();
    expect(component.cityDetails).toEqual(citydata);
  });

  it('should check the weather details cityname', () => {
    component.ngOnChanges();
    fixture.detectChanges();

    let cityname = fixture.nativeElement.querySelector('h4');
    expect(cityname.textContent as String).toBe('chennai');
  });

  it('should check the weather details countryname', () => {
    component.ngOnChanges();
    fixture.detectChanges();

    let countryname = fixture.nativeElement.querySelector('h6');
    expect(countryname.textContent as String).toBe('India');
  });

  it('should check the weather details', () => {
    component.ngOnChanges();
    fixture.detectChanges();

    let weatherdata = fixture.nativeElement.querySelectorAll('.alert');
    expect(weatherdata.length).toEqual(4);
    expect(weatherdata[0].textContent as String).toContain('Sunny');
    expect(weatherdata[1].textContent as String).toContain('Sunny');
    expect(weatherdata[2].textContent as String).toContain('Windy');
    expect(weatherdata[3].textContent as String).toContain('Cloudy');
  });
});
