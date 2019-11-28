import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-visitas',
  templateUrl: './modal-visitas.component.html',
  styleUrls: ['./modal-visitas.component.scss']
})
export class ModalVisitasComponent implements OnInit {

  //variables to popup
  visible:boolean = false;
  title: string = 'Agregar Visita';
  
  constructor() { }

  ngOnInit() {
  }

}
