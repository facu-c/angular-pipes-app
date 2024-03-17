import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: 'canFly'
})
export class CanFly implements PipeTransform {

  transform(value: boolean): string {
    if(value) return 'Vuela';
    else return 'No vuela';
  }

}
