import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar el locale de la app
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-GT';
import localeFr from '@angular/common/locales/fr';




registerLocaleData(localeEs);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "es-GT" },
    { provide: LOCALE_ID, useValue: "fr" },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
