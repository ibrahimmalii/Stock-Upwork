import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExchangesModule } from '../exchanges/exchanges.module';
import { MainFilterationComponent } from './main-filteration/main-filteration.component';

const routes : Routes =[
  {path : 'filter', component : MainFilterationComponent},
  {path : '', component : MainFilterationComponent},
]

@NgModule({
  declarations: [
    MainFilterationComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),ExchangesModule
  ]
})
export class FilterCompaniesModule { }
