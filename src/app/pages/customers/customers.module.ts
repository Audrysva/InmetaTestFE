import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import {CustomersService} from "../../services/customers.service";
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    CustomersRoutingModule
  ],
  providers:[CustomersService]
})
export class CustomersModule { }
