import { Component, Input } from '@angular/core';

import { Country } from './country';



@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {
  
  //receiving data from countries.component
  @Input() country: Country[] = [];

}