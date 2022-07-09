import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConnectionService } from 'src/app/services/connection/connection.service';
import { DialogInputComponent } from '../dialog-input/dialog-input.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {


  name: string | undefined;
  constructor(public dialog: MatDialog,
    private service: ConnectionService) { }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogInputComponent, {
      width: '250px',
      data: { name: this.name },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.service
        .addClient({ name: result }).subscribe();
    });
  }

}
