import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuarios } from 'src/app/shared/modelos/usuarios';
import { DxFormComponent } from 'devextreme-angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-usuarios',
  templateUrl: './modal-usuarios.component.html',
  styleUrls: ['./modal-usuarios.component.scss']
})
export class ModalUsuariosComponent implements OnInit {
  //variables of modal
  title:string = 'Nuevo Usuario';
  visible:boolean = false;
  accionForm: number = 1;
  usuario: Usuarios = new Usuarios();

  isValid: boolean = false;

  @ViewChild(DxFormComponent, { static: false }) form: DxFormComponent;

  constructor() { }

  ngOnInit() {
  }

  closeModal(){
    this.visible = false;
  }

  habilitarFormulario(){
    this.visible = true;

    if(this.accionForm === 1){  
      this.title = 'Nuevo Usuario';
      this.resetUsuario();
      console.log("Nuevo");
    }else if(this.accionForm === 2){
      this.title = 'Editar Usuario';
    }
  }

  resetUsuario(){
    this.usuario = new Usuarios();
    this.visible = true;
  }

  form_fieldDataChange(e){
    this.usuario = e.component.option('formData');
  }

  passwordComparison = () => {
    return this.usuario.contrasena;
  };

  validate(){
    var dxForm = this.form.instance;
    var validateResult: any = dxForm.validate();
    this.isValid = validateResult.isValid;
    return this.isValid;
  }

  onClickSaveChanges(e){
    if(this.validate() === true){
      if(this.accionForm === 1 ){
        Swal.fire('', 'Agregado Correctamente', 'success');
      }else if(this.accionForm === 2){
        Swal.fire('', 'Actualizado Correctamente', 'success');
      }
    }
  }


  eliminar(){
    console.log("Deshabilitar usuario");
  }
}
