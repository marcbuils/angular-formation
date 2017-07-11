import { Injectable } from '@angular/core';
import * as rpn from 'request-promise';

@Injectable()
export class SearchService {
  private urlSearch(query: string): string {
    return `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${query}`;
  }

  async search(query: string): Promise<string[]> {
    const url = this.urlSearch(query);
    const [, , , links] = JSON.parse(await rpn(url));

    return links;
  }
}
