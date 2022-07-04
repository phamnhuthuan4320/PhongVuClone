import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prodsName'
})
export class ProdsNamePipe implements PipeTransform {

  transform(value: string): string {
    if(value.length>30) return value.substring(0,30) + '...';
    else return value.substring(0,30);
  }

}
