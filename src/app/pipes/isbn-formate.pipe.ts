import { Pipe, PipeTransform } from '@angular/core';
import { concat } from 'rxjs';

@Pipe({
  name: 'isbnFormate',
  standalone: true
})
export class IsbnFormatePipe implements PipeTransform {

  transform(value: string, format: string = "-"): string {
    if (!value || value.length <= 3) return value;
    return `${value.slice(0, 3)}${format}${value.slice(3)}`;
  }
}
