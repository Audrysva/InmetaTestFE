import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import {OrdersService} from "../../services/orders.service";

import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {AddressPipe} from "../../Pipes/address.pipe";
import {ServicesPipe} from "../../Pipes/services.pipe";
import {ServiceUiComponent} from "../../orderUi/service/service.component";
import {ApplicationPipesModule} from "../../Pipes/app-pipes-module";
import {OrderDetailsComponent} from "../../components/order-details/order-details.component";

@NgModule({
  declarations: [
    OrdersComponent,AddressPipe,ServicesPipe,ServiceUiComponent, OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    OrdersRoutingModule,
    ApplicationPipesModule
  ],
  providers:[OrdersService, AddressPipe,ServicesPipe]
})
export class OrdersModule { }
