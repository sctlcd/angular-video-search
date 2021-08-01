import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  apiUrl: string;
  apiKey: string;

  // private API_URL = 'https://www.googleapis.com/youtube/v3/search';
  // private YOUTUBE_API_KEY = 'YOUTUBE_API_KEY';

  constructor(private http: HttpClient) { 
    this.apiUrl = environment.API_URL;
    this.apiKey = environment.API_KEY;
  }

  getVideos(query: string): Observable<any> {
    const url = `${this.apiUrl}?q=${query}&key=${this.apiKey}&part=snippet&type=video&maxResults=12`;
    return this.http.get(url)
      .pipe(
        map((response: any) => response.items)
      );
  }
}