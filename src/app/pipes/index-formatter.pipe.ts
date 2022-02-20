import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indexFormatter'
})
export class IndexFormatterPipe implements PipeTransform {

  transform(value: number): any {
    let textNumber = String(value);

    while (textNumber.length < 3) {
      textNumber = `0${textNumber}`;
    }

    return textNumber;
  }

}
