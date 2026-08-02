import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PartyDTO } from './model/PartyDTO';
import { GuestDTO } from './model/GuestDTO';
import { environment } from '../environments/environment'; 

@Injectable({
    providedIn: 'root'
})
export class AppService {
    public url = environment.apiUrl;

    private apiKey = environment.googleApiKey;
    private folderId = '1h9NwbpstPbe0ybBYBiI9wymyK3n06iG-';

    constructor(private http: HttpClient) {
    }

    nameSearch(firstName: string, lastName: string) {
        let params = new HttpParams()
            .set("firstName", firstName)
            .set("lastName", lastName);
        return this.http.get<PartyDTO[]>(this.url + "search", {params: params, responseType: 'json'});
    }

    getGuests(idParty: number){
        let params = new HttpParams()
            .set("idParty", idParty);
            
        return this.http.get<GuestDTO[]>(this.url + "getGuests", {params: params, responseType: 'json'});
    }

    saveGuests(guests: GuestDTO[]){
        return this.http.post<any>(this.url + "saveGuests", guests);
    }

    getPublicFolderFiles(): Observable<any> {
        const query = `'${this.folderId}' in parents and trashed = false`;
        
        // Choose fields to optimize performance and bandwidth
        const fields = 'files(id, name, mimeType, webViewLink, thumbnailLink)';
        const baseUrl = 'https://www.googleapis.com/drive/v3/files';
        
        const url = `${baseUrl}?q=${encodeURIComponent(query)}&fields=${fields}&key=${this.apiKey}`;
    
        return this.http.get(url);
    }
}
