import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsPageRoutingModule } from './products-page-routing.module';
import { ProductsPageComponent } from './products-page.component';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { RodapeModule } from 'src/app/components/rodape/rodape.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ProductsPageComponent,
  ],
  imports: [
    CommonModule,
    ProductsPageRoutingModule,
    MenuModule,
    RodapeModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ]
})
export class ProductsPageModule { }
