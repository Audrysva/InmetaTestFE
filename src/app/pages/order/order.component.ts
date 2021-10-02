import { Component, OnInit } from '@angular/core';
import {IOrder} from "../../interfaces/IOrder";
import {IAddress} from "../../interfaces/IAddress";
import {EServiceType} from "../../interfaces/EServiceType";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  EServiceType = EServiceType;
  isValidForm: boolean = false;
  order: IOrder = {} as IOrder;

  constructor() { }

  ngOnInit(): void {
  }

  showCustomers(){
  //Not implemented
  }

  showAddresses(){
  //Not implemented
  }

  addrssFromChanged(ev: IAddress){
//Not implemented
  }

  addrssToChanged(ev:IAddress){
//Not implemented
  }

  validateOrder(ev:any){
      this.isValidForm = ev.target.value != '';
  }
}
