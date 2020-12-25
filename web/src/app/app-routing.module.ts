import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
    path: 'landing-page', 
    loadChildren: () => import('./views/landing-page/landing-page.module').then(m => m.LandingPageModule) 
  },
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
