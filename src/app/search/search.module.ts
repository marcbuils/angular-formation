import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ResultsComponent } from './results/results.component';
import { SearchService } from './search.service';
import { SearchComponent } from './search/search.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [ResultsComponent, SearchComponent, InputComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SearchModule,
      providers: [ SearchService ]
    }
  }
}
