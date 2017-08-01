import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

@Injectable()
export class SearchService {
  private urlSearch(query: string): string {
    return `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${query}`;
  }

  constructor(private http: Http) {
  }

  search(queryStream: Observable<string>): Observable<string[]> {
    return queryStream
      .map((query) => this.urlSearch(query))
      .mergeMap((url) => this.http.get(url))
      .map((res: Response) => res.json())
      .map(([, , , links]) => links || []);
  }
}
