import { Pipe, PipeTransform } from '@angular/core';
import {IService} from "../interfaces/IService";
import {ServiceNamesPipe} from "./service-names.pipe";

@Pipe({
  name: 'services'
})
export class ServicesPipe implements PipeTransform {

  transform(s: IService[]): string {
    if(s.length>0){
      return s.map(x=>{
        return x.typeId + ' ' +x.dateFrom + ' - ' + x.dateTo + '<br />';
      }).toString();
    }
    return '';
  }

}
