import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyStaticsComponent } from './key-statics/key-statics.component';
import { BestModeComponent } from './best-mode/best-mode.component';


@NgModule({
  declarations: [
    KeyStaticsComponent,
    BestModeComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ExchangesModule { }
