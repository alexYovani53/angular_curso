import { NgModule } from '@angular/core';
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  exports: [
    CardModule,
    ButtonModule,
    MenubarModule,
    FieldsetModule
  ]
})
export class PrimeNgModule { }
