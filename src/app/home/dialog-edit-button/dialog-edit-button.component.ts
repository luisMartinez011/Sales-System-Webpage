import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductsService } from 'src/app/services/products/products.service';
import { DialogEditComponent } from '../dialog-edit/dialog-edit.component';

@Component({
  selector: 'app-dialog-edit-button',
  templateUrl: './dialog-edit-button.component.html',
  styleUrls: ['./dialog-edit-button.component.css']
})
export class DialogEditButtonComponent {

  @Input() clientID!: number;
  name: string | undefined;
  price: string | undefined;
  constructor(public dialog: MatDialog,
    private service: ProductsService) { }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogEditComponent, {
      width: '250px',
      data: {
        name: this.name,
        price: this.price
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service
          .updateProducts({
            nombre: result[0],
            precio: result[1],
            id: this.clientID
          }).subscribe();
      }
    });
  }
}

