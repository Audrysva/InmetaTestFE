import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IService} from "../../interfaces/IService";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IAddress} from "../../interfaces/IAddress";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  @Input() serviceTypeId = 0;
  @Input() selectedServiceId = 0;
  @Output() serviceChange = new EventEmitter<IService>();

  serviceForm = new FormGroup({
    dateFrom: new FormControl('',Validators.required),
    dateTo: new FormControl('')
  });

  isActive: boolean = false;
  service: IService = {} as IService;
  constructor() { }

  ngOnInit(): void {
    this.serviceForm.valueChanges.subscribe(val => {
      let service = this.serviceForm.value;
      service.typeId = this.serviceTypeId;
      this.serviceChange.next(service);
    });
  }

  setService(checked:boolean){
    this.isActive = checked;
  }
}
