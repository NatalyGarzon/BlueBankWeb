import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


///Agregado
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MainComponent } from './main/main.component';
import { PersonaComponent } from './persona/persona.component';
import { MatTableModule } from '@angular/material/table';
import { CuentasLComponent } from './cuentas-l/cuentas-l.component';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './interceptors';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule } from '@angular/material/form-field';
import { CrearCuentaComponent } from './MovimientosCuenta/crear-cuenta/crear-cuenta.component';
import { ConsultarCuentaComponent } from './MovimientosCuenta/consultar-cuenta/consultar-cuenta.component';
import { ConsignarComponent } from './MovimientosCuenta/consignar/consignar.component';
import { RetirarComponent } from './MovimientosCuenta/retirar/retirar.component';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PersonaComponent,
    CuentasLComponent,
    CrearCuentaComponent,
    ConsultarCuentaComponent,
    ConsignarComponent,
    RetirarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSliderModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MatFormFieldModule, 
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
