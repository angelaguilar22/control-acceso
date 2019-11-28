import { Component, OnInit, ViewChild } from '@angular/core';
import {ModalVisitasComponent} from './modal-visitas/modal-visitas.component';

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.component.html',
  styleUrls: ['./visitas.component.scss']
})
export class VisitasComponent implements OnInit {

  //Viewchild
  @ViewChild(ModalVisitasComponent, null) modal : ModalVisitasComponent;

  constructor() { }

  ngOnInit() {
  }

  agregarVisita(){
    this.modal.visible = true;
  }


}
