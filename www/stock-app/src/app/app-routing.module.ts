import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  }, {
    path: 'exchanges',
    loadChildren: () => import('./components/exchanges/exchanges.module').then(m => m.ExchangesModule)
    ,canActivate:[AuthGuard]
  }, {
    path: 'pricing',
    loadChildren: () => import('./components/pricing/pricing.module').then(m => m.PricingModule)
    ,canActivate:[AuthGuard]
  }, {
    path: 'filter-company',
    loadChildren: () => import('./components/filter-companies/filter-companies.module').then(m => m.FilterCompaniesModule)
    ,canActivate:[AuthGuard]
  },
  {path : '', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
