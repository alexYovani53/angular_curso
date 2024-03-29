import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { Heroe, Publisher } from '../../interfaces/herores.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius: 50px
    }
  `]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  heroe: Heroe = {
    superhero: '',
    publisher: Publisher.DCComics,
    first_appearance: '',
    characters: '',
    alter_ego: ''
  }

  editando: boolean = false;

  constructor(private hService: HeroesService,
    private aRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private matDialog: MatDialog) { }

  ngOnInit(): void {
    if (!this.router.url.includes('editar')) {
      return;
    }
    this.aRoute.params.pipe(
      switchMap(({ id }) => this.hService.getHeroePorId(id))
    ).subscribe(
      (heroe) => {
        this.editando = true;
        this.heroe = heroe
      }
    )

  }

  save(): void {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id != undefined) {
      // Actualizando
      this.hService.update(this.heroe).subscribe((rsp) => this.mostrarSnakBar("Registro actualizado"))
      return;
    }

    this.hService.saveHero(this.heroe).subscribe(
      (e) => {
        this.router.navigate(['/heroes/editar', e.id])
      }
    )
    console.log(this.heroe);
  }

  delete() {
    const dialog = this.matDialog.open(ConfirmarComponent, {
      width: '350px',
      height:'250px',
      data: this.heroe
    })

    dialog.afterClosed().subscribe(
      (result)=>{
        if(result){
          this.hService.delete(this.heroe.id!).subscribe((rsp) => this.router.navigate(["/heroes"]));
        }
      }
    )
  }

  mostrarSnakBar(mensaje: string) {
    this.snackBar.open(mensaje, 'Ok!', {
      duration: 2500
    })
  }

}
