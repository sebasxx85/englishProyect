import {
  AfterViewInit, Component, Inject, Input, OnDestroy, PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

declare global { interface Window { adsbygoogle: any[] } }

@Component({
    selector: 'app-adsense-in-article',
    imports: [CommonModule],
    template: `
    <div *ngIf="!hidden" class="ad-wrapper">
      <ins class="adsbygoogle"
           style="display:block; text-align:center; min-height:120px;"
           data-ad-client="ca-pub-5500762015641372"
           [attr.data-ad-slot]="adSlot"
           data-ad-layout="in-article"
           data-ad-format="fluid"
           [attr.data-full-width-responsive]="responsive ? 'true' : null"
           [attr.data-adtest]="adTest ? 'on' : null"></ins>
    </div>
  `,
    styles: [`.ad-wrapper{margin:18px 0}`]
})
export class AdsenseInArticleComponent implements AfterViewInit, OnDestroy {
  /** Slot por defecto (in-article) */
  @Input() adSlot = '5605299050';
  /** Ocultar si el viewport es menor a este ancho (px) */
  @Input() minWidth = 450;
  /** Habilitar formato responsive */
  @Input() responsive = true;
  /** Anuncios de prueba en dev si quieres forzarlo desde fuera */
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
      // Si estaba oculto y ahora supera el ancho, cargamos UNA vez.
      const wasHidden = this.hidden;
      this.hidden = shouldHide;
      if (!shouldHide && wasHidden) {
        try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch {}
      }
    };

    // Evaluación inicial
    evaluate();

    // Si no está oculto, empujar el anuncio
    if (!this.hidden) {
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch {}
    }

    // Escuchar resize y reevaluar
    const onResize = () => evaluate();
    window.addEventListener('resize', onResize);
    this.resizeHandler = () => window.removeEventListener('resize', onResize);
  }

  ngOnDestroy(): void {
    if (this.resizeHandler) this.resizeHandler();
  }
}
