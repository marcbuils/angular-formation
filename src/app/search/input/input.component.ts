import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sea-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  query: string = '';
  @Output() search = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSearch() {
    this.search.emit(this.query);
  }

}
