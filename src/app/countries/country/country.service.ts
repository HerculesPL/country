import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//define API url
const API = 'https://restcountries.eu/rest/v2';

@Injectable ({ providedIn: 'root'})

export class CountryService {

    constructor(private http: HttpClient) {
    }

    //get all countries from API
    getAll<Country>(): Observable<Country> {
        return this.http.get<Country>(API + '/region/americas');
    }
}