import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Client } from '../models/client';
import { ConnectionService } from '../services/connection/connection.service';
import { HomeDataSource, HomeItem } from './home-datasource';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  EXAMPLE_DATA: Client[] = [
    { id: 1, name: 'Hydrogen', venta: [] },
    { id: 2, name: 'second', venta: [] }
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Client>;
  dataSource: HomeDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  resultado!: Client[];
  headers: string[] = [];
  constructor(private connectionService: ConnectionService) {
    this.dataSource = new HomeDataSource();
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.getClients()

  }
  ngAfterViewInit(): void {

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  getClients() {
    this.connectionService.getConnection()
      .subscribe((data) => this.resultado = data)
    this.displayClients()
  }

  displayClients() {
    this.dataSource.setData(this.resultado as Client[])
    console.log(this.dataSource.data)
  }
}
