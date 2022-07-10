import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-new',
  templateUrl: './dialog-new.component.html',
  styleUrls: ['./dialog-new.component.css']
})
export class DialogNewComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
