import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v2';
  constructor(private http: HttpClient) {}
  get httpParams() {
    return new HttpParams().set(
      'fields',
      'name,capital,flag,population,alpha2Code'
    );
  }
  searchByContry(countryToSearch: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/name/${countryToSearch}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
  searchByCapital(countryToSearch: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/capital/${countryToSearch}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
  getSingleCountry(id: string): Observable<Country> {
    const url: string = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }
  searchByContinent(continentToSearch: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/region/${continentToSearch}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
}
