import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
    MainPageComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule, 
    FormsModule
  ]
})
export class DbzModule { }
