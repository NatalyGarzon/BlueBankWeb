import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from '../models/dataTable.model';
import { CuentaserviceService } from '../cuentaservice.service';

@Component({
  selector: 'app-cuentas-l',
  templateUrl: './cuentas-l.component.html',
  styleUrls: ['./cuentas-l.component.css']
})
export class CuentasLComponent implements OnInit {

  dataSource = [];
  displayedColumns: string[] = ['nombre', 'documento'];
  constructor(private cuentaserviceService: CuentaserviceService) {
  }

  ngOnInit(): void {
    this.cuentaserviceService.GetPErsonas().subscribe(data => {
      this.dataSource = data;
    });
  }

}
