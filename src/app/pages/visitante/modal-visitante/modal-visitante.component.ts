import { Component, OnInit, ViewChild } from '@angular/core';
import { Visitante } from 'src/app/shared/modelos/visitante';
import { DxFormComponent } from 'devextreme-angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-visitante',
  templateUrl: './modal-visitante.component.html',
  styleUrls: ['./modal-visitante.component.scss']
})
export class ModalVisitanteComponent implements OnInit {

  //variables of component 
  visitante: Visitante = new Visitante();
  accionForm: number = 1;
  visible: boolean = false;
  title: string = 'Nuevo Visitante';
  isValid: boolean = false;

  @ViewChild(DxFormComponent, { static: false }) form: DxFormComponent;
  constructor() { }

  ngOnInit() {
  }


  form_fieldDataChange(e) {
    this.visitante = e.component.option('formData');
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
      this.title = 'Nuevo Visitante';
    } else if (this.accionForm == 2) {
      this.title = 'Editar Visitante';
    }
  }

  eliminar() {

  }

}
