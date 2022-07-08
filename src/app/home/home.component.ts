import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Client } from '../models/client';
import { ConnectionService } from '../services/connection/connection.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  public clients: Client[] = [];
  dataSource = new MatTableDataSource<Client>();
  columns: string[] = ["id", "name"];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: ConnectionService) { }

  ngOnInit(): void {
    this.service.getConnection().subscribe(clients => {
      this.clients = clients;
      this.dataSource.data = this.clients;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


  onSave() {
    console.log(this.clients)
  }
}
