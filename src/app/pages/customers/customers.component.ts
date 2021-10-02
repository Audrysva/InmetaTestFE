import { Component, OnInit } from '@angular/core';
import {CustomersService} from "../../services/customers.service";
import {ICustomer} from "../../interfaces/ICustomer";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers: ICustomer[] = [];
  displayedColumns: string[] = ['name','phoneNumber','emailAddress'];

  constructor(private customersService : CustomersService) { }

  ngOnInit(): void {
    this.GetCustomers();
  }

  private GetCustomers() {
    this.customersService.getCustomers().subscribe(customers=>{
      this.customers = customers;
    });
  }

}
