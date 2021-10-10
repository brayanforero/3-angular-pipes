import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translatePass',
})
export class TranslatePassPipe implements PipeTransform {
  transform(value: string, show: boolean = false): string {
    return (!show) ? '*'.repeat(value.length) : value;
  }
}
