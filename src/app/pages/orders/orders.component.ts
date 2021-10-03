import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IOrder} from "../../interfaces/IOrder";
import {OrdersService} from "../../services/orders.service";
import {fromEvent} from "rxjs";
import {SharedVariablesService} from "../../services/shared-variables.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class OrdersComponent implements OnInit {

  expandedOrder: IOrder = {} as IOrder;
  orders: IOrder[] = [] as IOrder[];
  filteredOrders: IOrder[] = [] as IOrder[];
  displayedColumns: string[] = ["CustomerName", "AddressFrom", "AddressTo", "Services", "Actions"];

  constructor(private ordersService: OrdersService,
              private sharedVariables: SharedVariablesService) {
    this.getOrders();
  }

  ngOnInit(): void {
    this.sharedVariables.searchingOrder$.subscribe(searchStr => {
      this.filteredOrders = this.orders.filter(x =>
        x.customer.name.toUpperCase().includes(searchStr.toUpperCase()));
    })
  }

  private getOrders() {
    this.ordersService.getOrders().subscribe(orders => {
      this.orders = this.filteredOrders = orders;
    })
  }
}
