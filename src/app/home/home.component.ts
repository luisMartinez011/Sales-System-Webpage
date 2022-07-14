import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Client } from '../models/client';
import { Producto } from '../models/producto';
import { ProductsService } from '../services/products/products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  products: Producto[] = [];
  dataSource = new MatTableDataSource<Producto>();
  columns: string[] = ["id", "name", "price", "edit", "delete"];
  subscription!: Subscription;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
    this.subscription = this.service.refresh$.subscribe(() => {
      this.getProducts();
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getProducts(): void {
    this.service.getProducts().subscribe(products => {
      this.products = products;
      this.dataSource.data = this.products;
    });
  }

  deleteProducts(id: number) {
    this.service
      .deleteProducts(id)
      .subscribe();
  }
}

