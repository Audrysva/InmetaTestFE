import {Component, Input, OnInit} from '@angular/core';
import {IService} from "../../interfaces/IService";

@Component({
  selector: 'app-service-ui',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceUiComponent implements OnInit {

  @Input() service = {} as IService;

  constructor() { }

  ngOnInit(): void {
  }

}
