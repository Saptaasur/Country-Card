import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../Models/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Importing map from rxjs/operators

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private localApi = 'assets/countries.json'; // Path to the local JSON file

  constructor(private httpClient: HttpClient) {}

  // Load all countries from the local JSON file
  getAllCountry(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(this.localApi);
  }

  // Get country by name from the local JSON file
  getCountryByName(name: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(this.localApi).pipe(
      map((countries: Country[]) =>
        countries.filter(country => country.name.toLowerCase() === name.toLowerCase())
      )
    );
  }

  // Get countries by their codes from the local JSON file
  getCountriesByCodes(codes: string[]): Observable<Country[]> {
    return this.httpClient.get<Country[]>(this.localApi).pipe(
      map((countries: Country[]) =>
        countries.filter(country => codes.includes(country.alpha3Code))
      )
    );
  }
}
