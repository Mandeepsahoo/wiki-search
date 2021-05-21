import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  search(term) {
    let params = new HttpParams()
      .set('action', 'query')
      .set('list', 'search')
      .set('srsearch', term)
      .set('format', 'json')
      .set('utf8', '1')
      .set('origin', '*');
    return this.http.get('https://en.wikipedia.org/w/api.php', { params });
  }
}
