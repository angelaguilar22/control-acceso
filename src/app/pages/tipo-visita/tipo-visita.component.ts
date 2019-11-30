import { Component, OnInit, ViewChild } from '@angular/core';
//imports of viewchild
import {ModalTipoVisitaComponent} from './modal-tipo-visita/modal-tipo-visita.component';
import {TipoVisita} from '../../shared/modelos/tipo-visita';
import {delay} from 'q';
import { TipoVisitaServices } from 'src/app/shared/services/serviciosApp/service.tipovisita.js';

@Component({
  selector: 'app-tipo-visita',
  templateUrl: './tipo-visita.component.html',
  styleUrls: ['./tipo-visita.component.scss']
})
export class TipoVisitaComponent implements OnInit {

  //variables of component
  key: string = 'id';
  tipos: TipoVisita[];
  objTipo: TipoVisita = new TipoVisita();
  pageSize: number = 5;

  //variables of grid 
  visibleOptions: boolean = true;
  visibleEliminar: boolean = true;
  textEliminar: string = 'Eliminar';

  //variables of sons
  @ViewChild(ModalTipoVisitaComponent, null) modal: ModalTipoVisitaComponent;

  constructor(private service: TipoVisitaServices) { }

  ngOnInit() {
    this.generateTipoVisitante();
  }

  abrirFormulario() {
    this.modal.title = 'Nuevo Tipo de Visita';
    this.modal.tipo = new TipoVisita();
    this.modal.accionForm = 1;
    this.modal.visible = true;
  }

  generateTipoVisitante() {
    this.service.get().subscribe(data => {
    console.log(data);
      this.tipos = data;
    });
  }

  handleRow(e) {
    console.log(e.data);
    if (!(e.data === undefined)) {
      this.objTipo = e.data;
    }

  }

  actionsButton = async e => {
    await delay(300);

    var accion = e.element.innerText;

    if (accion == 'EDITAR') {
      this.modal.accionForm = 2;
      this.modal.tipo = this.objTipo;
      this.modal.habilitarFormulario();

    } else if (accion == 'Eliminar') {
      this.modal.eliminar();
    }
  }

}
