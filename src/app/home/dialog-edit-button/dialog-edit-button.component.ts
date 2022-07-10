import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Client } from 'src/app/models/client';
import { ConnectionService } from 'src/app/services/connection/connection.service';
import { DialogEditComponent } from '../dialog-edit/dialog-edit.component';

@Component({
  selector: 'app-dialog-edit-button',
  templateUrl: './dialog-edit-button.component.html',
  styleUrls: ['./dialog-edit-button.component.css']
})
export class DialogEditButtonComponent {

  @Input() clientID!: number;
  name: string | undefined;
  constructor(public dialog: MatDialog,
    private service: ConnectionService) { }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogEditComponent, {
      width: '250px',
      data: { name: this.name },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      this.service
        .updateClient({ name: result, id: this.clientID }).subscribe();
    });
  }
}
