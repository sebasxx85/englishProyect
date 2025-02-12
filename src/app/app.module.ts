import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { SharedModule } from './Shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Type1Component } from './components/type1/type1.component';
import { Type2Component } from './components/type2/type2.component';
import { Type3Component } from './components/type3/type3.component';
import { ShufflePipe } from './pipes/shuffle.pipe';


@NgModule({ declarations: [
        // recordar que si uso lazyload no poner componentes aca ni los standalone ni tradicionales
        AppComponent,
        HomeComponent,
        UserComponent,
        CrearUsuarioComponent,
        Type1Component,
        Type2Component,
        Type3Component,
        ShufflePipe,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        //Angular Material
        MatIconModule,
        MatCardModule,
        MatTableModule,
        MatProgressBarModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatSelectModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule], providers: [
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
