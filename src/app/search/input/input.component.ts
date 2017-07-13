import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { SearchService } from '../search.service';

@Component({
  selector: 'sea-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  query: BehaviorSubject<string>;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.query = this.searchService.query;
  }

  change(value: string) {
    this.query.next(value);
  }
}
