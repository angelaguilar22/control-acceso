import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Visitante } from 'src/app/shared/modelos/visitante';
import { DxFormComponent } from 'devextreme-angular';
import Swal from 'sweetalert2';
import { visitanteService } from 'src/app/shared/services/serviciosApp/service.visitante';

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
  @Output() reload: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private service: visitanteService) { }

  ngOnInit() {
  }


  form_fieldDataChange(e) {
    this.visitante = e.component.option('formData');
    this.visitante.estatus = 'activo';
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
        console.log(this.visitante, 'su puta madre');

        this.service.post(this.visitante).subscribe(data => {
          this.closeModal();
          Swal.fire('', 'Agregado Correctamente', 'success');
          this.reload.emit(true);
        });
        this.closeModal();
      } else if (this.accionForm === 2) {
        this.service.put(this.visitante).subscribe(data => {
          this.closeModal();
          Swal.fire('', 'Actualizado Correctamente', 'success');
          this.reload.emit(true);
        });
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
