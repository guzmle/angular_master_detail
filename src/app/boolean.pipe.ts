import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appBoolean',
})
export class BooleanPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): string {
    console.log('boolean pipe');
    return value ? 'Sí' : 'No';
  }

}
