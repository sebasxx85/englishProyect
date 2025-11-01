import { AfterViewInit, Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

declare global { interface Window { adsbygoogle: any[] } }

@Component({
  selector: 'app-adsense-in-article',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ad-wrapper">
      <ins class="adsbygoogle"
           style="display:block; text-align:center; min-height:140px;"
           data-ad-client="ca-pub-5500762015641372"
           [attr.data-ad-slot]="adSlot"
           data-ad-format="fluid"
           data-ad-layout="in-article"
           data-full-width-responsive="true"></ins>
    </div>
  `,
  styles: [`.ad-wrapper{margin:16px 0}`]
})
export class AdsenseInArticleComponent implements AfterViewInit {
  @Input() adSlot = '5605299050'; // tu slot de in-article
  constructor(@Inject(PLATFORM_ID) private pid: Object) {
    if (isPlatformBrowser(this.pid) && !window.adsbygoogle) window.adsbygoogle = [];
  }
  ngAfterViewInit() {
    if (!isPlatformBrowser(this.pid)) return;
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch {}
  }
}
