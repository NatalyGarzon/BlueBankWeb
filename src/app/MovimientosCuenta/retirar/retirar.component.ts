import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MovimientoCuenta } from 'src/app/models/cuenta.model';
import { CuentaserviceService } from 'src/app/cuentaservice.service';

@Component({
  selector: 'app-retirar',
  templateUrl: './retirar.component.html',
  styleUrls: ['./retirar.component.css']
})
export class RetirarComponent implements OnInit {

  return : number;
  formulario : FormGroup;
  dataModelCuenta = new MovimientoCuenta();

  constructor(private cuentaserviceService: CuentaserviceService
    , private builder : FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.builder.group({
      NumeroCuenta:this.dataModelCuenta.NumeroCuenta,
      valor: this.dataModelCuenta.valor
    })
  }

  RetirarCuenta() {
      this.cuentaserviceService.RetirarCuenta(this.formulario.value).subscribe(data => {
        this.return  = data;
      });;
    }
}


