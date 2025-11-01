import { AfterViewInit, Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

declare global { interface Window { adsbygoogle: any[] } }

@Component({
  selector: 'app-adsense-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ad-wrapper">
      <ins class="adsbygoogle"
           style="display:block; min-height:120px;"
           data-ad-client="ca-pub-5500762015641372"
           [attr.data-ad-slot]="adSlot"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  `,
  styles: [`.ad-wrapper{margin:18px 0}`]
})
export class AdsenseFooterComponent implements AfterViewInit {
  @Input() adSlot = '6338413333'; // tu slot del pie
  constructor(@Inject(PLATFORM_ID) private pid: Object) {
    if (isPlatformBrowser(this.pid) && !window.adsbygoogle) window.adsbygoogle = [];
  }
  ngAfterViewInit() {
    if (!isPlatformBrowser(this.pid)) return;
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch {}
  }
}
