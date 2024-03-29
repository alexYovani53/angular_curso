import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/herores.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css'],
})
export class ConfirmarComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Heroe
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }
  borrar(): void {
    this.dialogRef.close(true);
  }
  cerrar(): void {
    this.dialogRef.close();
  }
}
