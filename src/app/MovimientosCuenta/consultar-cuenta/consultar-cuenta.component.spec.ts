import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCuentaComponent } from './consultar-cuenta.component';

describe('ConsultarCuentaComponent', () => {
  let component: ConsultarCuentaComponent;
  let fixture: ComponentFixture<ConsultarCuentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarCuentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
