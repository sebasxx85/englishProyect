import { Component} from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { QuillModule, QuillModules } from 'ngx-quill';
import { SharedModule } from 'src/app/Shared/shared.module';

@Component({
  selector: 'app-editor-articulo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, QuillModule, FormsModule, SharedModule ],
  templateUrl: './editor-articulo.component.html',
  styleUrl: './editor-articulo.component.scss'
})
export class EditorArticuloComponent {
  contenido: string = '';

  modules: QuillModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // estilos
      ['blockquote', 'code-block'],                     // bloques
      [{ 'header': 1 }, { 'header': 2 }],               // encabezados
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],     // listas
      [{ 'script': 'sub'}, { 'script': 'super' }],      // sub/superscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // indentado
      [{ 'direction': 'rtl' }],                         // dirección
      [{ 'size': ['small', false, 'large', 'huge'] }],  // tamaños
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'color': [] }, { 'background': [] }],          // colores
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['link', 'image', 'video'],                       // multimedia
      ['clean']                                         // limpiar
    ]
  };

  guardar() {
    console.log('Contenido del artículo:', this.contenido);
  }
}
