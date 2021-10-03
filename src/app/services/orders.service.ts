import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICustomer} from "../interfaces/ICustomer";
import {IOrderDto} from "../interfaces/IOrderDto";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getOrders(): Observable<IOrderDto[]> {
    return this.http.get<IOrderDto[]>("/api/orders");
  }
}
