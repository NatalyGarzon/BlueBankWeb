export interface cuentaCrear {
    numeroCuenta: string;
    saldo: string;
    nombrePersona: string;
}

export class MovimientoCuenta {
    NumeroCuenta: string;
    valor: string;
}

export class Consultar {
    cuentaNumero: string;
}

export class cuentaAgregar {
    NumeroCuenta: string;
    NuevoSaldo: string;
    IdPersona: string;
}
