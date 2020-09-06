import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { cuentaAgregar } from 'src/app/models/cuenta.model';
import { CuentaserviceService } from 'src/app/cuentaservice.service';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {

  return : number;
  formulario : FormGroup;
  dataModelCuenta = new cuentaAgregar();

  constructor(private cuentaserviceService: CuentaserviceService
    , private builder : FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.builder.group({
      NumeroCuenta:this.dataModelCuenta.NumeroCuenta,
      NuevoSaldo: this.dataModelCuenta.NuevoSaldo,
      IdPersona : this.dataModelCuenta.IdPersona

    })
  }

  CrearCuenta() {
    this.cuentaserviceService.AgregarCuenta(this.formulario.value).subscribe(data => {
      this.return  = data;
    });;
  }

}
