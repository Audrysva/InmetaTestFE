import {AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICustomer} from "../../interfaces/ICustomer";
import {FormControl, FormGroup} from "@angular/forms";
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  @Input() customer: ICustomer = {} as ICustomer;
  @Output() customerChange = new EventEmitter<ICustomer>();

  customerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phoneNumber: new FormControl('',
      [Validators.required,Validators.minLength(8)]),
    emailAddress: new FormControl('', Validators.email),
  });

  constructor() {
  }

  ngOnInit(): void {
    this.customerForm.valueChanges.subscribe(val => {
      let customer = this.customerForm.value;
      this.customerChange.next(customer);
    });
    if (this.customer) {
      setTimeout(()=> {
        this.customerForm.patchValue({
          name: this.customer.name,
          phoneNumber: this.customer.phoneNumber,
          emailAddress: this.customer.emailAddress,
        });
      });
    }
  }


}
