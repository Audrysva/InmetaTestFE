import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IAddress} from "../../interfaces/IAddress";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @Input() address = {} as IAddress;
  @Output() addressChange = new EventEmitter<IAddress>();


  addressForm = new FormGroup({
    zip: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    street: new FormControl('',Validators.required),
    number: new FormControl(''),
    countryCode: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
    this.addressForm.valueChanges.subscribe(val => {
      let address = this.addressForm.value;
      this.addressChange.next(address);
    });
    setTimeout(()=>{
      this.addressForm.patchValue({
        zip:this.address.zip,
        city:this.address.city,
        street:this.address.street,
        number:this.address.number,
        countryCode:this.address.countryCode,
      });
    });
  }

}
