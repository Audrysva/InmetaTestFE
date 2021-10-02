import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { ReactiveFormsModule } from '@angular/forms';

import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core";

import {CustomerComponent} from "../../components/customer/customer.component";
import {AddressComponent} from "../../components/address/address.component";
import {ServiceComponent} from "../../components/service/service.component";
import {ApplicationPipesModule} from "../../Pipes/app-pipes-module";



@NgModule({
  declarations: [
    OrderComponent,
    CustomerComponent,
    AddressComponent,
    ServiceComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    OrderRoutingModule,
    ApplicationPipesModule
  ],
  providers:[MatDatepickerModule]
})
export class OrderModule { }
