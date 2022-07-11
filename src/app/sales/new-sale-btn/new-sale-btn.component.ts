import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewSaleFormComponent } from '../new-sale-form/new-sale-form.component';

@Component({
  selector: 'app-new-sale-btn',
  templateUrl: './new-sale-btn.component.html',
  styleUrls: ['./new-sale-btn.component.css']
})
export class NewSaleBtnComponent {
  name!: string;
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewSaleFormComponent, {
      width: '250px',
      data: { name: this.name },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}
