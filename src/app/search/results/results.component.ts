import { Component, Input, OnInit } from '@angular/core';

import { SearchService } from '../search.service';

@Component({
  selector: 'sea-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() query: string;
  results: Promise<string[]>;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.results = this.searchService.search(this.query);
  }

}
