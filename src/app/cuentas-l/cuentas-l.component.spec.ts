import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasLComponent } from './cuentas-l.component';

describe('CuentasLComponent', () => {
  let component: CuentasLComponent;
  let fixture: ComponentFixture<CuentasLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentasLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
