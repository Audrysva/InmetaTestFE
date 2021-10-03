import {ICustomer} from "./ICustomer";
import {IAddress} from "./IAddress";
import {IService} from "./IService";

export interface IOrder {
  id:string,
  customer:ICustomer
  addressFrom:IAddress,
  addressTo:IAddress,
  services:IService[],
  orderNotes:string
}
