import {Component, Input, OnInit} from '@angular/core';
import {IService} from "../../interfaces/IService";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  @Input() serviceTypeId = 0;
  @Input() selectedServiceId = 0;

  serviceForm = new FormGroup({
    isActive: new FormControl(false),
    dateFrom: new FormControl('',Validators.required),
    dateTo: new FormControl('')
  });

  isActive: boolean = false;
  service: IService = {} as IService;
  constructor() { }

  ngOnInit(): void {
  }

  setService(checked:boolean){
    this.isActive = checked;
  }
}
