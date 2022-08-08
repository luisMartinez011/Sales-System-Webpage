import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductsService } from 'src/app/services/products/products.service';
import { DialogNewComponent } from '../dialog-new/dialog-new.component';

@Component({
  selector: 'app-new-button',
  templateUrl: './dialog-new-button.component.html',
  styleUrls: ['./dialog-new-button.component.css']
})
export class DialogNewButton {

  name: string | undefined;
  price: string | undefined;
  constructor(public dialog: MatDialog,
    private service: ProductsService) { }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogNewComponent, {
      width: '250px',
      data: {
        name: this.name,
        price: this.price
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.service.addProducts(result).subscribe()
      }
    });
  }

}
