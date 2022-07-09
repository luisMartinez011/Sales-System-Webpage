import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Client } from '../models/client';
import { ConnectionService } from '../services/connection/connection.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  clients: Client[] = [];
  dataSource = new MatTableDataSource<Client>();
  columns: string[] = ["id", "name", "edit", "delete"];
  subscription!: Subscription;
  newClient = "New Client";
  editClient = "Edit"
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: ConnectionService) { }

  ngOnInit(): void {
    this.getClients();
    this.subscription = this.service.refresh$.subscribe(() => {
      this.getClients();
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getClients(): void {
    this.service.getConnection().subscribe(clients => {
      console.log(clients)
      this.clients = clients;
      this.dataSource.data = this.clients;
    });
  }

  deleteClients(client: number) {
    this.service
      .deleteClient(client)
      .subscribe();
  }
}
