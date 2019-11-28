import { Component, OnInit, ViewChild } from '@angular/core';
//imports of viewchild
import { Visitante } from '../../shared/modelos/visitante';
import { delay } from 'q';
import { ModalVisitanteComponent } from './modal-visitante/modal-visitante.component';

@Component({
  selector: 'app-visitante',
  templateUrl: './visitante.component.html',
  styleUrls: ['./visitante.component.scss']
})
export class VisitanteComponent implements OnInit {

  //variables of component
  key: string = 'id';
  visitantes: Visitante[];
  objVisitante: Visitante = new Visitante();
  pageSize: number = 5;

  //variables of grid 
  visibleOptions: boolean = true;
  visibleEliminar: boolean = true;
  textEliminar: string = 'Eliminar';

  //variables of sons
  @ViewChild(ModalVisitanteComponent, null) modal: ModalVisitanteComponent;
  constructor() { }

  ngOnInit() {
    this.generateVisitantes();
  }


  abrirFormulario() {
    this.modal.title = 'Nuevo Visitante';
    this.modal.visitante = new Visitante();
    this.modal.accionForm = 1;
    this.modal.visible = true;
  }

  generateVisitantes() {
    this.visitantes = new Array<Visitante>();

    for (let i = 0; i < 10; i++) {
      var visitante = new Visitante();

      visitante.id = i;
      visitante.nombre = 'visitante' + i;
      visitante.apellidos = 'ambos apellidos' + i;
      visitante.estatus = 'activo';

      this.visitantes.push(visitante);
    }
  }

  handleRow(e) {
    console.log(e.data);
    if (!(e.data === undefined)) {
      this.objVisitante = e.data;
    }

  }

  actionsButton = async e => {
    await delay(300);

    var accion = e.element.innerText;

    if (accion == 'EDITAR') {
      this.modal.accionForm = 2;
      this.modal.visitante = this.objVisitante;
      this.modal.habilitarFormulario();

    } else if (accion == 'Eliminar') {
      this.modal.eliminar();
    }
  }


}
