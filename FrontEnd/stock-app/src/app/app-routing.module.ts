import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent }
  ,
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  }, {
    path: 'exchanges',
    loadChildren: () => import('./components/exchanges/exchanges.module').then(m => m.ExchangesModule)
  }, {
    path: 'pricing',
    loadChildren: () => import('./components/pricing/pricing.module').then(m => m.PricingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
