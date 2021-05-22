import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators';

interface WikipediaResponse {
  query: {
    search: {
      title: string;
      snippet: string;
      pageid: number;
    };
  };
}

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
    return this.http
      .get<WikipediaResponse>('https://en.wikipedia.org/w/api.php', { params })
      .pipe(pluck('query', 'search'));
  }
}
