import { Component } from '@angular/core';

@Component({
  selector: 'sea-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query = '';

  search(query: string) {
    this.query = query;
  }
}
