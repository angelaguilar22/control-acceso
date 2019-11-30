import { Component, OnInit, ViewChild } from '@angular/core';
//imports of viewchild
import { ModalUsuariosComponent } from './modal-usuarios/modal-usuarios.component';
import { Usuarios } from '../../shared/modelos/usuarios';
import {delay} from 'q';
import { UsuarioServices } from 'src/app/shared/services/serviciosApp/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  //variables of sons
  @ViewChild(ModalUsuariosComponent, null) modal: ModalUsuariosComponent;

  //variables of component
  key: string = 'id';
  usuarios: Usuarios[];
  objUsuario: Usuarios = new Usuarios();

  //variables of grid 
  visibleOptions: boolean = true;
  visibleEliminar: boolean = true;
  textEliminar: string = 'Deshabilitar';
  pageSize: number = 5;

  constructor(private service: UsuarioServices) { }

  ngOnInit() {
    this.generateUsers();
  }

  abrirFormulario() {
    this.modal.title = 'Nuevo Usuario';
    this.modal.usuario = new Usuarios();
    this.modal.accionForm = 1;
    this.modal.visible = true;
  }

  generateUsers() {
    this.service.get().subscribe(data => {
      console.log(data);
      this.usuarios = data;
    });
  }

  handleRow(e) {
    console.log(e.data);
    if (!(e.data === undefined)) {
      this.objUsuario = e.data;
    }

  }

  actionsButton = async e => {
    await delay(300);

    var accion = e.element.innerText;

    if (accion == 'EDITAR') {
      this.modal.accionForm = 2;
      this.modal.usuario = this.objUsuario;
      this.modal.habilitarFormulario();

    } else if (accion == 'DESHABILITAR') {
      this.modal.eliminar();
    }
  }
}
