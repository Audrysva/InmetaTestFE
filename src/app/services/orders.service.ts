import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IOrder} from "../interfaces/IOrder";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>("/api/orders");
  }

  saveOrder(order: IOrder):Observable<IOrder> {
    return this.http.post<IOrder>("/api/orders",order);
  }
}
