import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'ColorPuntajePipe',
  standalone: true
})

export class ColorPuntajePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(values: number[]): SafeHtml {
    if (!values || !Array.isArray(values)) {
      return '';
    }

    const formattedValues = values.map(value => {
      const color = value >= 0 ? 'green' : 'red';
      return `<span style="color: ${color};">${value}</span>`;
    }).join(', ');

    return this.sanitizer.bypassSecurityTrustHtml(formattedValues);
  }
}