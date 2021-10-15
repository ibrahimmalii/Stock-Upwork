import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FilterAndSearchComponent } from './filter-and-search/filter-and-search.component';

const routes : Routes =[
  {path : 'filter', component : FilterAndSearchComponent},
  {path : '', component : FilterAndSearchComponent},
]

@NgModule({
  declarations: [
    FilterAndSearchComponent
  ],
  imports: [
  CommonModule,RouterModule.forChild(routes)
  ]
})
export class FilterCompaniesModule { }
