import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sea-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  query: string = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onSearch() {
    this.router.navigate(['search', this.query]);
  }
}
