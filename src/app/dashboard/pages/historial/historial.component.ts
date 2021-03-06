import { Component, OnInit } from '@angular/core';
import { TraerViajesService } from '../../services/traer-viajes.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {

  constructor(private traerViajes:TraerViajesService) { }

  ngOnInit(): void {
   this.traerViajes.setStatusTravel('historial',9);
    this.traerViajes.traerViajes();
  }

}
