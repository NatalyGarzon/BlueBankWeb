import { Component, OnInit } from '@angular/core';
import { CuentaserviceService } from '../cuentaservice.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

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
