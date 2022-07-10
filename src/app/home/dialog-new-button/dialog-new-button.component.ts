import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConnectionService } from 'src/app/services/connection/connection.service';
import { DialogNewComponent } from '../dialog-new/dialog-new.component';

@Component({
  selector: 'app-new-button',
  templateUrl: './dialog-new-button.component.html',
  styleUrls: ['./dialog-new-button.component.css']
})
export class DialogNewButton {

  name: string | undefined;
  constructor(public dialog: MatDialog,
    private service: ConnectionService) { }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogNewComponent, {
      width: '250px',
      data: { name: this.name },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.service
        .addClient({ name: result }).subscribe();
    });
  }

}
