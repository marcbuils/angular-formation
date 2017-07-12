import { Component, Input } from '@angular/core';

import { SearchService } from '../search.service';

@Component({
  selector: 'sea-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  @Input()
  set query(query: string) {
    this.results = this.searchService.search(query);
  }

  results: Promise<string[]>;

  constructor(private searchService: SearchService) { }
}
