import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Concepto } from 'src/app/models/concepto';
import { SalesService } from 'src/app/services/sales/sales.service';
import { DeploySalesDataSource, DeploySalesItem } from './deploy-sales-datasource';

@Component({
  selector: 'app-deploy-sales',
  templateUrl: './deploy-sales.component.html',
  styleUrls: ['./deploy-sales.component.css']
})

export class DeploySalesComponent implements OnChanges, AfterViewInit {
  @Input() conceptos!: Concepto[];
  @Input() major = 0;

  prueba: Concepto[] = [{
    "cantidad": 4,
    "importe": 80,
    "idProducto": 1
  }]
  dataSource = new MatTableDataSource<Concepto>();
  columns: string[] = ["amount", "price", "idProduct"];
  subscription!: Subscription;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: SalesService) { }


  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource.data = this.conceptos;
    console.log(this.conceptos)

  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    console.log("init")
  }

  getConceptos(): void {


  }

  deleteProducts(id: number) {
  }
}
