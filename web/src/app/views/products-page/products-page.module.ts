import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsPageRoutingModule } from './products-page-routing.module';
import { ProductsPageComponent } from './products-page.component';
import { MenuModule } from 'src/app/components/menu/menu.module';


@NgModule({
  declarations: [
    ProductsPageComponent,
  ],
  imports: [
    CommonModule,
    ProductsPageRoutingModule,
    MenuModule
  ]
})
export class ProductsPageModule { }
