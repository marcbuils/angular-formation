import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
  selector: 'sea-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: Observable<string>;

  constructor(private router: Router, private route: ActivatedRoute) {}

  search(query: string) {
    this.router.navigate(['search', query]);
  }

  ngOnInit() {
    this.query = this.route.paramMap
      .map((params) => params.get('query') || '')
      .do((query) => {
        console.log('query: ', query);
      });
  }
}
