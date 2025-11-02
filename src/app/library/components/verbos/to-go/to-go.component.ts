import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Title, Meta } from '@angular/platform-browser';
import { SharedModule } from 'src/app/Shared/shared.module';
import { AdsenseInArticleComponent } from '../../adsense-in-article/adsense-in-article.component';
import { AdsenseFooterComponent } from '../../adsense-footer/adsense-footer.component';

@Component({
  selector: 'app-to-go',
  standalone: true,
  imports: [CommonModule, SharedModule, MatCardModule, AdsenseInArticleComponent, AdsenseFooterComponent],
  templateUrl: './to-go.component.html',
  styleUrls: ['./to-go.component.scss']
})
export class ToGoComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Verbo TO GO en inglés: presente, pasado y usos | Biblioteca');
    this.meta.updateTag({
      name: 'description',
      content:
        'Guía del verbo to go: formas en presente (go/goes) y pasado (went), usos cotidianos, estructuras y phrasal verbs frecuentes, con ejemplos y práctica.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'to go, goes, went, go out, go on, go to, phrasal verbs con go, gramática inglesa, inglés básico'
    });
  }

  conjugaciones = [
    { pronombre: 'I',    presente: 'go',   traduccionPresente: 'yo voy',            pasado: 'went', traduccionPasado: 'yo fui' },
    { pronombre: 'You',  presente: 'go',   traduccionPresente: 'tú vas',            pasado: 'went', traduccionPasado: 'tú fuiste' },
    { pronombre: 'He',   presente: 'goes', traduccionPresente: 'él va',             pasado: 'went', traduccionPasado: 'él fue' },
    { pronombre: 'She',  presente: 'goes', traduccionPresente: 'ella va',           pasado: 'went', traduccionPasado: 'ella fue' },
    { pronombre: 'It',   presente: 'goes', traduccionPresente: 'eso va',            pasado: 'went', traduccionPasado: 'eso fue' },
    { pronombre: 'We',   presente: 'go',   traduccionPresente: 'nosotros vamos',    pasado: 'went', traduccionPasado: 'nosotros fuimos' },
    { pronombre: 'You (plural)', presente: 'go', traduccionPresente: 'ustedes van', pasado: 'went', traduccionPasado: 'ustedes fueron' },
    { pronombre: 'They', presente: 'go',   traduccionPresente: 'ellos van',         pasado: 'went', traduccionPasado: 'ellos fueron' }
  ];
}
