import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderConfirmationRoutingModule } from './order-confirmation-routing.module';
import { OrderConfirmationComponent } from './order-confirmation.component';

import { MenuModule } from 'src/app/components/menu/menu.module';
import { RodapeModule } from 'src/app/components/rodape/rodape.module';

import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [OrderConfirmationComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    OrderConfirmationRoutingModule,
    MenuModule,
    RodapeModule,
    MatInputModule,
    MatStepperModule,
    MatButtonModule,
  ]
})
export class OrderConfirmationModule { }
