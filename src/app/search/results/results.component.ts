import { Component, OnInit } from '@angular/core';

import { SearchService } from '../search.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'sea-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  results: Observable<string[]>;

  constructor(public searchService: SearchService) { }

  ngOnInit() {
    this.results = this.searchService.results;
  }
}
