import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IService} from "../../interfaces/IService";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IAddress} from "../../interfaces/IAddress";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit,AfterViewInit {

  @Input() serviceTypeId = 0;
  @Input() service = {} as IService;
  @Output() serviceChange = new EventEmitter<IService>();
  isActive: boolean = false;

  serviceForm = new FormGroup({
    dateFrom: new FormControl('',Validators.required),
    dateTo: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
    this.serviceForm.valueChanges.subscribe(val => {
      let service = this.serviceForm.value;
      service.typeId = this.serviceTypeId;
      this.serviceChange.next(service);
    });

  }

  ngAfterViewInit() {
    if(this.service){
      setTimeout(()=>{
        this.isActive = this.service && this.service.typeId === this.serviceTypeId;
        this.serviceForm.patchValue({
          dateFrom:this.service.dateFrom,
          dateTo:this.service.dateTo
        });
      });
    }
  }

  setService(checked:boolean){
    this.isActive = checked;
  }
}
