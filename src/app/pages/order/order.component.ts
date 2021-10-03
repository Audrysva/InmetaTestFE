import {Component, OnInit} from '@angular/core';
import {IOrder} from "../../interfaces/IOrder";
import {IAddress} from "../../interfaces/IAddress";
import {EServiceType} from "../../interfaces/EServiceType";
import {IService} from "../../interfaces/IService";
import {OrdersService} from "../../services/orders.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  EServiceType = EServiceType;
  isValidForm: boolean = false;
  order: IOrder = {} as IOrder;

  constructor(private ordersService:OrdersService) {
  }

  ngOnInit(): void {
  }

  showCustomers() {
    //Not implemented
  }

  showAddresses() {
    //Not implemented
  }

  addrssFromChanged(address: IAddress) {
    this.order.addressFrom = address;
  }

  addrssToChanged(ev: IAddress) {
    this.order.addressTo = ev;
  }

  serviceChanged(service: IService) {
    this.order.services = this.order.services || [];
    if (this.order.services.find(s => s.typeId === service.typeId)) {
      this.order.services = this.order.services.map(s => {
        return (s.typeId == service.typeId) ? service : s;
      });
    } else {
      this.order.services.push(service);
    }
  }

  saveOrder() {
    this.ordersService.saveOrder(this.order).subscribe(order=>{
      this.order = order;
    });
  }

  validateOrder(notes: any) {
    this.order.orderNotes = notes;
    this.isValidForm = notes.target.value != '';
  }
}
