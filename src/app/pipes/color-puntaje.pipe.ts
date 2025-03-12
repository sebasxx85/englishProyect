import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'ColorPuntajePipe',
  standalone: true
})

export class ColorPuntajePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: number | number[]): SafeHtml {
    if (value === null || value === undefined) {
      return '';
    }

    if (Array.isArray(value)) {
      // Si es un array, formatea cada número individualmente
      const formattedValues = value.map(num => this.formatNumber(num)).join(', ');
      return this.sanitizer.bypassSecurityTrustHtml(formattedValues);
    } else {
      // Si es un solo número, aplica el formato directamente
      return this.sanitizer.bypassSecurityTrustHtml(this.formatNumber(value));
    }
}

private formatNumber(num: number): string {
  const color = num >= 0 ? 'green' : 'red';
  return `<span style="color: ${color};">${num}</span>`;
}

}