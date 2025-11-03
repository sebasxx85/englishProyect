import { AfterViewInit, Component, Inject, Input, PLATFORM_ID, isDevMode } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

declare global { interface Window { adsbygoogle: any[] } }

@Component({
  selector: 'app-adsense-practica',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ad-wrapper">
      <ins class="adsbygoogle"
           style="display:inline-block; width:728px; height:90px;"
           data-ad-client="ca-pub-5500762015641372"
           [attr.data-ad-slot]="adSlot"
           [attr.data-adtest]="isDev ? 'on' : null"></ins>
    </div>
  `,
  styles: [`
    .ad-wrapper {
      margin: 18px auto;
      text-align: center;
      min-height: 90px;
    }
  `]
})
export class AdsensePracticaComponent implements AfterViewInit {
  /** Slot del banner 728x90 (ingles-practica) */
  @Input() adSlot = '8316643750';

  /** En entorno local muestra anuncios de prueba */
  isDev = isDevMode();

  constructor(@Inject(PLATFORM_ID) private pid: Object) {
    if (isPlatformBrowser(this.pid) && !window.adsbygoogle) {
      window.adsbygoogle = [];
    }
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.pid)) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Evitar error si ya se cargó previamente
    }
  }
}
