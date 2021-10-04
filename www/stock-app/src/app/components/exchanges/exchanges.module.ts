import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyStaticsComponent } from './key-statics/key-statics.component';
import { BestModeComponent } from './best-mode/best-mode.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { KeyStaticsOneComponent } from './key-statics-one/key-statics-one.component';

const routes :Routes = [
    {path : 'main', component : MainComponent},
    {path : '', component : MainComponent},
]
@NgModule({
  declarations: [
    KeyStaticsComponent,
    BestModeComponent,
    MainComponent,
    KeyStaticsOneComponent,
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class ExchangesModule { }
