import {ICustomer} from "./ICustomer";
import {IAddress} from "./IAddress";

export interface IOrder {
  id:string,
  customer:ICustomer
  addressFrom:IAddress,
  addressTo:IAddress,
  notes:string
}
