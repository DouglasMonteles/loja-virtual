import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigupPageComponent } from './sigup-page.component';

const routes: Routes = [{ path: '', component: SigupPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigupPageRoutingModule { }
