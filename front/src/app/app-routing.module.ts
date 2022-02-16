import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LandingComponent } from './page/landing/landing.component';
import { CompraComponent } from "./page/compra/compra.component";

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full'
},
{
    path: 'compra',
    component: CompraComponent
},
{
    path: '**',
    redirectTo: ''
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
