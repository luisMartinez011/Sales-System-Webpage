import { Component, Inject, LOCALE_ID } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConnectionService } from '../services/connection/connection.service';
import { formatDate } from '@angular/common';

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
    price: [null, Validators.required],
    // postalCode: [null, Validators.compose([
    //   Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    // ]
  });

  hasUnitNumber = false;

  states = [
    { name: 'Alabama', abbreviation: 'AL' },
    { name: 'Alaska', abbreviation: 'AK' },
    { name: 'American Samoa', abbreviation: 'AS' },
    { name: 'Arizona', abbreviation: 'AZ' },
    { name: 'Arkansas', abbreviation: 'AR' }
  ];

  // get cliente() {
  //   return this.addressForm.get('client') as form;
  // }

  constructor(private fb: FormBuilder,
    private service: ConnectionService,
    @Inject(LOCALE_ID) private locale: string) { }

  onSubmit(): void {
    console.log(
      this.addressForm.value
    )
    let now = formatDate(Date.now(), 'yyyy-MM-dd', this.locale);
    this.service.addClient(
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
    ).subscribe();
  }
}
