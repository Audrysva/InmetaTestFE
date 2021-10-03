import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serviceName'
})
export class ServiceNamesPipe implements PipeTransform {

  transform(value: number): string {
    switch (value){
      case 1:
        return 'Flytting';
      case 2:
        return 'Pakking';
      case 3:
        return 'Rengjøring';
      default:
        return '';
    }
  }

}
