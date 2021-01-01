import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigupPageRoutingModule } from './sigup-page-routing.module';
import { SigupPageComponent } from './sigup-page.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { RodapeModule } from 'src/app/components/rodape/rodape.module';

@NgModule({
  declarations: [SigupPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SigupPageRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MenuModule,
    RodapeModule,
  ],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    }
  ]
})
export class SigupPageModule { }
