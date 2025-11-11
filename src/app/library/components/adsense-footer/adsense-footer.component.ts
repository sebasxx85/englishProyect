import {
  AfterViewInit, Component, Inject, Input, OnDestroy, PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

declare global { interface Window { adsbygoogle: any[] } }

@Component({
  selector: 'app-adsense-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="!hidden" class="ad-wrapper">
      <ins class="adsbygoogle"
           [ngStyle]="insStyle"
           data-ad-client="ca-pub-5500762015641372"
           [attr.data-ad-slot]="adSlot"
           [attr.data-ad-format]="format"
           [attr.data-full-width-responsive]="responsive ? 'true' : null"
           [attr.data-adtest]="adTest ? 'on' : null"></ins>
    </div>
  `,
  styles: [`.ad-wrapper{margin:18px 0}`]
})
export class AdsenseFooterComponent implements AfterViewInit, OnDestroy {
  /** Slot por defecto (footer/auto) */
  @Input() adSlot = '6338413333';
  /** Ocultar si el viewport es menor a este ancho (px) */
  @Input() minWidth = 450;
  /** 'auto' o tamaño fijo si quieres (ej: 'auto') */
  @Input() format: 'auto' | 'fluid' = 'auto';
  /** Estilo inline para el <ins> (por defecto bloque) */
  @Input() insStyle: {[k: string]: string} = { display: 'block', minHeight: '120px' };
  /** Responsive on/off */
  @Input() responsive = true;
  /** Ads de prueba opcional */
  @Input() adTest = false;

  hidden = false;
  private resizeHandler?: () => void;

  constructor(@Inject(PLATFORM_ID) private pid: Object) {
    if (isPlatformBrowser(this.pid) && !window.adsbygoogle) window.adsbygoogle = [];
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.pid)) return;

    const evaluate = () => {
      const shouldHide = window.innerWidth < this.minWidth;
      const wasHidden = this.hidden;
      this.hidden = shouldHide;
      if (!shouldHide && wasHidden) {
        try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch {}
      }
    };

    evaluate();

    if (!this.hidden) {
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch {}
    }

    const onResize = () => evaluate();
    window.addEventListener('resize', onResize);
    this.resizeHandler = () => window.removeEventListener('resize', onResize);
  }

  ngOnDestroy(): void {
    if (this.resizeHandler) this.resizeHandler();
  }
}
