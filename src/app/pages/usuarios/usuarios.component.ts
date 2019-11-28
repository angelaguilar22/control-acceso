import { Component, OnInit, ViewChild } from '@angular/core';
//imports of viewchild
import { ModalUsuariosComponent } from './modal-usuarios/modal-usuarios.component';
import { Usuarios } from '../../shared/modelos/usuarios';
import {delay} from 'q';

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

  constructor() { }

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
    this.usuarios = new Array<Usuarios>();

    for (let i = 0; i < 10; i++) {
      var usuario = new Usuarios();

      usuario.id = i;
      usuario.usuario = 'usuario' + i;
      usuario.contrasena = 'password' + i;
      usuario.contrasenaConfirm = 'password' + i;
      usuario.fechaCreacion = new Date();
      usuario.fechaModificacion = new Date();
      usuario.fechaBaja = new Date();
      usuario.estatus = 'activo';

      this.usuarios.push(usuario);
    }
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
