import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Concepto } from 'src/app/models/concepto';
import { ProductsService } from 'src/app/services/products/products.service';
import { SalesService } from 'src/app/services/sales/sales.service';
import { DeploySalesDataSource, DeploySalesItem } from './deploy-sales-datasource';

@Component({
  selector: 'app-deploy-sales',
  templateUrl: './deploy-sales.component.html',
  styleUrls: ['./deploy-sales.component.css']
})

export class DeploySalesComponent implements OnChanges, AfterViewInit {
  @Input() conceptos!: Concepto[];
  @Input() productName: string | undefined;

  total = 0;
  dataSource = new MatTableDataSource<Concepto>();
  columns: string[] = ["product", "amount", "price", "delete"];
  subscription!: Subscription;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource.data = this.conceptos;
    console.log("dfdf")
    if (!(this.conceptos[0] === undefined)) {
      this.total += this.conceptos[this.conceptos.length - 1].importe;
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  deleteConcepto(concepto: Concepto) {
    const firstMatch = this.conceptos.findIndex((res) => {
      return (res.cantidad === concepto.cantidad
        && res.idProducto === concepto.idProducto
        && res.importe === concepto.importe)
    });
    this.conceptos.splice(firstMatch, 1);
    this.dataSource.data = this.conceptos;
  }
}
