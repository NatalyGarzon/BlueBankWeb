import { Component, OnInit } from '@angular/core';
import { CuentaserviceService } from 'src/app/cuentaservice.service';
import { cuentaCrear, Consultar } from 'src/app/models/cuenta.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-consultar-cuenta',
  templateUrl: './consultar-cuenta.component.html',
  styleUrls: ['./consultar-cuenta.component.css']
})
export class ConsultarCuentaComponent implements OnInit {

  cuentaDatos : cuentaCrear;
  //;consultar : Consultar;
  formulario : FormGroup;
  dataModelCuenta = new Consultar();
  constructor(private cuentaserviceService: CuentaserviceService
    , private builder : FormBuilder) { }

  ngOnInit(): void {
    this.formulario=this.builder.group({
      cuentaNumero:this.dataModelCuenta.cuentaNumero
    })
  
  }

  consultarCuenta() {
    this.cuentaserviceService.ConsultarCuenta(this.formulario.value).subscribe(data => {
      this.cuentaDatos = data;
    });;
  }

}
