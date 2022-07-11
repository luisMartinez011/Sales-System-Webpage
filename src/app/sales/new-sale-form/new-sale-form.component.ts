import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-sale-form',
  templateUrl: './new-sale-form.component.html',
  styleUrls: ['./new-sale-form.component.css']
})
export class NewSaleFormComponent {

  constructor(
    public dialogRef: MatDialogRef<NewSaleFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
