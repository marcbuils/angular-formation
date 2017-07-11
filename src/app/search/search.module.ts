import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsComponent } from './results/results.component';
import { SearchService } from './search.service';

@NgModule({
  declarations: [ResultsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ResultsComponent
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
