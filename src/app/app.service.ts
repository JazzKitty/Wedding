import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Service, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PartyDTO } from './model/PartyDTO';
import { GuestDTO } from './model/GuestDTO';
import { environment } from '../environments/environment';

@Service()
export class AppService {
  private http = inject(HttpClient);

  public url = environment.apiUrl;

  private apiKey = environment.googleApiKey;
  private folderId = '1h9NwbpstPbe0ybBYBiI9wymyK3n06iG-';

  nameSearch(firstName: string, lastName: string) {
    const params = new HttpParams().set('firstName', firstName).set('lastName', lastName);
    return this.http.get<PartyDTO[]>(this.url + 'search', {
      params: params,
      responseType: 'json',
    });
  }

  getGuests(idParty: number) {
    const params = new HttpParams().set('idParty', idParty);

    return this.http.get<GuestDTO[]>(this.url + 'getGuests', {
      params: params,
      responseType: 'json',
    });
  }

  saveGuests(guests: GuestDTO[]) {
    return this.http.post<any>(this.url + 'saveGuests', guests);
  }


}
