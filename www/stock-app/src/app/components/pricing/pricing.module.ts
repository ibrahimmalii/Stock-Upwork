import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingComponent } from '../pricing/pricing/pricing.component';
import { RouterModule, Routes } from '@angular/router';


const routes : Routes = [
  {path : 'pricing', component : PricingComponent},
  {path : '', component : PricingComponent},
]

@NgModule({
  declarations: [
    PricingComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class PricingModule { }
