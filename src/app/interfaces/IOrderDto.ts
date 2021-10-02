import {ICustomer} from "./ICustomer";
import {IAddress} from "./IAddress";
import {IService} from "./IService";

export interface IOrderDto {
  id: string,
  customer: ICustomer,
  AddressFrom: IAddress,
  AddressTo: IAddress,
  OrderNotes: string,
  CreatedAt: Date,
  Services: IService[]
}
