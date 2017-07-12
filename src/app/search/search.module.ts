import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ResultsComponent } from './results/results.component';
import { SearchService } from './search.service';
import { SearchComponent } from './search/search.component';
import { InputComponent } from './input/input.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: ':query',
    component: SearchComponent
  }
];

@NgModule({
  declarations: [ResultsComponent, SearchComponent, InputComponent],
  providers: [ SearchService ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class SearchModule {
}
