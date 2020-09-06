import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CuentaserviceService } from 'src/app/cuentaservice.service';
import { MovimientoCuenta } from 'src/app/models/cuenta.model';

@Component({
  selector: 'app-consignar',
  templateUrl: './consignar.component.html',
  styleUrls: ['./consignar.component.css']
})
export class ConsignarComponent implements OnInit {

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

    ConsignarCuenta() {
      this.cuentaserviceService.ConsignarCuenta(this.formulario.value).subscribe(data => {
        this.return  = data;
      });;
    }
}
