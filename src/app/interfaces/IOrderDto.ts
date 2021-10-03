import {ICustomer} from "./ICustomer";
import {IAddress} from "./IAddress";
import {IService} from "./IService";

export interface IOrderDtoy {
  id: string,
  customer: ICustomer,
  addressFrom: IAddress,
  addressTo: IAddress,
  orderNotes: string,
  createdAt: Date,
  services: IService[]
}
