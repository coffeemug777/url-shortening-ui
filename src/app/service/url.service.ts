import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type UrlDataRequest = {
  url: string;
};

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  constructor(private http: HttpClient) {}

  create(url: string) {
    console.log('url ', url);
    const request: UrlDataRequest = {
      url,
    };
    return this.http.post('http://localhost:8080/api/create', request);
  }
}
