import { Component, OnInit, ViewChild } from '@angular/core';
import {codigoQR} from '../../../shared/modelos/codigo-qr';
import { DxFormComponent } from 'devextreme-angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-qr',
  templateUrl: './modal-qr.component.html',
  styleUrls: ['./modal-qr.component.scss']
})
export class ModalQrComponent implements OnInit {

  //variables of component 
  codigoQR: codigoQR = new codigoQR();
  accionForm: number = 1;
  visible: boolean = false;
  title: string = 'Nuevo Tipo';
  isValid: boolean = false;

  @ViewChild(DxFormComponent, { static: false }) form: DxFormComponent;

  constructor() { }

  ngOnInit() {
  }

  form_fieldDataChange(e) {
    this.codigoQR = e.component.option('formData');
  }

  validate() {
    var dxForm = this.form.instance;
    var validateResult: any = dxForm.validate();
    this.isValid = validateResult.isValid;
    return this.isValid;
  }

  onClickSaveChanges(e) {
    if (this.validate() === true) {
      if (this.accionForm === 1) {
        Swal.fire('', 'Agregado Correctamente', 'success');
      } else if (this.accionForm === 2) {
        Swal.fire('', 'Actualizado Correctamente', 'success');
      }
    }
  }

  closeModal() {
    this.visible = false;
  }

  habilitarFormulario() {
    this.visible = true;

    if (this.accionForm == 1) {
      this.title = 'Nuevo Tipo de Visita';
    } else if (this.accionForm == 2) {
      this.title = 'Editar Tipo de Visita';
    }
  }

  eliminar() {

  }

}
