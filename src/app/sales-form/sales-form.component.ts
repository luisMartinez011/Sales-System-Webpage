import { Component, Inject, LOCALE_ID, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Concepto } from '../models/concepto';
import { ProductsService } from '../services/products/products.service';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-sales-form',
  templateUrl: './sales-form.component.html',
  styleUrls: ['./sales-form.component.css']
})
export class SalesFormComponent {
  addressForm = this.fb.group({

    client: [null, Validators.required],
    producto: [null, Validators.required],
    amount: [null, Validators.required],
    price: [null, Validators.compose([
      Validators.required, Validators.minLength(3), Validators.maxLength(5)
    ])],
  });

  conceptos: Concepto[] = [];
  productos: Producto[] = [];
  price: any;
  productName!: string;
  clientName: any;

  constructor(private fb: FormBuilder,
    private service: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.service.getProducts().subscribe(products => {
      this.productos = products;
    });
  }

  findProduct() {
    const productName = this.addressForm.value.producto;
    const product = this.productos.find((val) => {
      return productName === val.nombre
    })
    return product;
  }

  findProductPrice() {
    const product = this.findProduct();
    this.price = product?.precio;
  }


  onSubmit(): void {
    const formResult = this.addressForm.value;
    const product = this.findProduct();
    this.conceptos.push({
      "cantidad": formResult.amount,
      "importe": formResult.amount * this.price,
      "idProducto": product?.id as number
    });
    this.productName = this.addressForm.value.producto
    this.clientName = formResult.client;
  }
}
