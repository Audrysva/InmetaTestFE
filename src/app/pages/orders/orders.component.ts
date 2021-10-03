import {Component, OnInit} from '@angular/core';
import {IOrderDto} from "../../interfaces/IOrderDto";
import {OrdersService} from "../../services/orders.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: IOrderDto[] = [] as IOrderDto[];
  displayedColumns: string[] = ["CustomerName","AddressFrom","AddressTo","Services","Actions"];

  constructor(private ordersService:OrdersService) {
    this.getOrders();
  }

  ngOnInit(): void {
  }

  private getOrders() {
    this.ordersService.getOrders().subscribe(orders=>{
     this.orders = orders;
    })
  }
}
