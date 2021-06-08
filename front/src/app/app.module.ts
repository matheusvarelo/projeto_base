import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotifierModule } from 'angular-notifier';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ErrorInterceptor } from './interceptors/error/error.interceptor';
import { UsuarioModule } from './pages/usuarios/usuario.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UsuarioModule,
    DropdownModule,
    ButtonModule,
    NotifierModule.withConfig({
      behaviour: {
        autoHide: 2000
      },
      position: {
        horizontal: {
          position: 'right'
        },
        vertical: {
          position: 'top'
        }
      }
    }),
    AppRoutingModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ]
})

export class AppModule { }
