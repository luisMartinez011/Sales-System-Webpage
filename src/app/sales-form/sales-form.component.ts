import { Component, Inject, LOCALE_ID } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConnectionService } from '../services/connection/connection.service';
import { formatDate } from '@angular/common';
import { Concepto } from '../models/concepto';
import { SalesService } from '../services/sales/sales.service';

@Component({
  selector: 'app-sales-form',
  templateUrl: './sales-form.component.html',
  styleUrls: ['./sales-form.component.css']
})
export class SalesFormComponent {
  addressForm = this.fb.group({

    client: [null, Validators.required],
    product: [null, Validators.required],
    amount: [null, Validators.required],
    price: [null, Validators.compose([
      Validators.required, Validators.minLength(3), Validators.maxLength(5)
    ])],
    // postalCode: [null, Validators.compose([
    //   Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    // ]
  });

  conceptos: Concepto[] = [{
    "cantidad": 4,
    "importe": 80,
    "idProducto": 1
  }];

  major = 1;

  constructor(private fb: FormBuilder,
    private service: SalesService,
    @Inject(LOCALE_ID) private locale: string) { }

  onSubmit(): void {
    this.major++;
    const formResult = this.addressForm.value
    console.log(formResult)
    if (formResult) {
      this.conceptos.push({
        "cantidad": 4,
        "importe": 80,
        "idProducto": 1
      });
    }

    /* this.service.addConcepto([{
      "cantidad": 4,
      "importe": 80,
      "idProducto": 1
    }]);
    let now = formatDate(Date.now(), 'yyyy-MM-dd', this.locale); */
    /* this.service.addClient(
      {
        "name": "kkkk",
        "venta": [{
          "fecha": "2020-05-05",
          "total": 700,
          "conceptos": [{
            "cantidad": 4,
            "importe": 80,
            "idProducto": 1
          }]
        }]
      }
    ).subscribe(); */

  }
}
