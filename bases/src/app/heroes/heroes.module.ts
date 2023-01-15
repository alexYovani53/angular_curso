import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import { HeroeComponent } from './heroe/heore.component';
import { ListadoComponent } from './listado/listado.component';
@NgModule({
    declarations:[
        HeroeComponent, 
        ListadoComponent
    ], 
    exports:[
        ListadoComponent,
        HeroeComponent
    ], 
    imports:[
        //Modulos 
        CommonModule
    ]
})
export class HeoresModule{
    
}