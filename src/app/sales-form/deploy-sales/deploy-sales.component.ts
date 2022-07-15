import { AfterViewInit, Component, Input, IterableDiffers, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Concepto } from 'src/app/models/concepto';
import { ConnectionService } from 'src/app/services/connection/connection.service';
import { SalesService } from 'src/app/services/sales/sales.service';
@Component({
  selector: 'app-deploy-sales',
  templateUrl: './deploy-sales.component.html',
  styleUrls: ['./deploy-sales.component.css']
})

export class DeploySalesComponent implements AfterViewInit {
  @Input() conceptos!: Concepto[];
  @Input() productName!: string;

  total = 0;
  dataSource = new MatTableDataSource<Concepto>();
  columns: string[] = ["idProduct", "amount", "price", "delete"];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  iterableDiffer: any;

  constructor(private iterableDiffers: IterableDiffers,
    private service: ConnectionService) {
    this.iterableDiffer = iterableDiffers.find([]).create();
  }

  ngDoCheck() {
    let changes = this.iterableDiffer.diff(this.conceptos);
    if (changes) {
      this.dataSource.data = this.conceptos;
      console.log("cambios")
      if (!(this.conceptos[0] === undefined)) {
        this.total += this.conceptos[this.conceptos.length - 1].importe;
      }
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

  exportAsPDF(div_id: string) {
    let data = document.getElementById(div_id);
    html2canvas(data as HTMLElement).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('l', 'cm', 'a4'); //Generates PDF in landscape mode
      // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
      pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);
      pdf.save('Filename.pdf');
    });
  }

  postDataToDB() {
    this.service.addClient(this.conceptos);
  }
}
