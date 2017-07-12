import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'sea-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  query = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  search(query: string) {
    this.router.navigate(['search', query]);
  }

  ngOnInit() {
    this.subscription = this.route.paramMap
      .subscribe((params) => {
        this.query = params.get('query') || '';
        console.log('test: ', this.query);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
