import {Pipe, PipeTransform} from '@angular/core';
import {IAddress} from "../interfaces/IAddress";

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(a: IAddress): string {
    return a.street + ', ' + a.zip + ' ' + a.city;
  }

}
