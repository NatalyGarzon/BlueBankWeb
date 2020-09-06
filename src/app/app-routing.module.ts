import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PersonaComponent } from './persona/persona.component';
import { CuentasLComponent } from './cuentas-l/cuentas-l.component';
import { RetirarComponent } from './MovimientosCuenta/retirar/retirar.component';
import { CrearCuentaComponent } from './MovimientosCuenta/crear-cuenta/crear-cuenta.component';
import { ConsultarCuentaComponent } from './MovimientosCuenta/consultar-cuenta/consultar-cuenta.component';
import { ConsignarComponent } from './MovimientosCuenta/consignar/consignar.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    //path: "login",
    //loadChildren: () => import('src/app/cuentas/cuentas.module').then(m => m.CuentasModule)
    path: "main",
    component: MainComponent
  },
  {
    path: "cuentas",
    component: CuentasLComponent
  },
  {
    path: "persona",
    component: PersonaComponent
  },
  {
    path : "crear-cuenta",
    component : CrearCuentaComponent
  },
  {
    path : "consultar-cuenta",
    component : ConsultarCuentaComponent
  },
  {
    path : "consignar",
    component : ConsignarComponent
  },
  {
    path : "retirar",
    component : RetirarComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
