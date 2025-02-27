import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shuffle',
  standalone: true
})
export class ShufflePipe2 implements PipeTransform {
  transform(array: string[]): string[] {
    return array
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }
}
