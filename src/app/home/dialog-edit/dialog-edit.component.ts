import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.css']
})
export class DialogEditComponent {


  constructor(
    public dialogRef: MatDialogRef<DialogEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

