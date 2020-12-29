import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
    path: 'landing-page', 
    loadChildren: () => import('./views/landing-page/landing-page.module').then(m => m.LandingPageModule) 
  },
  { 
    path: 'products-page', 
    loadChildren: () => import('./views/products-page/products-page.module').then(m => m.ProductsPageModule) 
  },
  { 
    path: 'profile-page', 
    loadChildren: () => import('./views/profile-page/profile-page.module').then(m => m.ProfilePageModule) 
  },
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
