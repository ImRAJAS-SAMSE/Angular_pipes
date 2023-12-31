import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
})
export class MyRevPipe implements PipeTransform {
  transform(value: any): any {
    let reversedString: any = '';

    for (let i = value.length - 1; i >= 0; i--) {
      reversedString += value[i];
    }

    return reversedString;
  }
}
