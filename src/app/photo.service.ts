import { Service } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PartyDTO } from './model/PartyDTO';
import { GuestDTO } from './model/GuestDTO';
import { environment } from '../environments/environment';

@Service()
export class PhotoService {
  private http = inject(HttpClient);

  public fileListSub = new BehaviorSubject<any[]>([]);
  public leftBannerIDSub = new BehaviorSubject<string>('');
  public bannerIDSub = new BehaviorSubject<string>('')
  public rightBannerIDSub = new BehaviorSubject<string>('');


  private apiKey = environment.googleApiKey;
  private folderId = '1h9NwbpstPbe0ybBYBiI9wymyK3n06iG-';

  

  getPublicFolderFiles() {
    const query = `'${this.folderId}' in parents and trashed = false`;

    // Choose fields to optimize performance and bandwidth
    const fields = 'files(id, name, mimeType, webViewLink, thumbnailLink)';
    const baseUrl = 'https://www.googleapis.com/drive/v3/files';

    const url = `${baseUrl}?q=${encodeURIComponent(query)}&fields=${fields}&key=${this.apiKey}`;

    this.http.get<any>(url).subscribe({
      next: (response) => {
        // Iterate through files returned by Google Drive API
        this.fileListSub.next(response.files);
        response.files.forEach((file: { name: any; id: any; }) => {
          //console.log('File Name:', file.name, 'ID:', file.id);
          switch(file.name){
            case 'banner.jpg':
              this.bannerIDSub.next(file.id);
              break;
            case 'left_banner.png':
              this.leftBannerIDSub.next(file.id);
              break;
            case 'right_banner.png':
              this.rightBannerIDSub.next(file.id);
              break;
          }
        });
      },
      error: (err) => console.error('Error fetching files', err),
    });
  }
  
}
