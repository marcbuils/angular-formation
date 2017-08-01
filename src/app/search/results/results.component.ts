import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { SearchService } from '../search.service';

@Component({
  selector: 'sea-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  results: Observable<string[]>;

  constructor(public searchService: SearchService, private route: ActivatedRoute) { }

  ngOnInit() {
    const query = this.route.paramMap.map((params) => params.get('query'));
    this.results = this.searchService.search(query);
  }
}
