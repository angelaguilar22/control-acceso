import { Component, OnInit, ViewChild } from '@angular/core';
import {TipoVisita} from '../../../shared/modelos/tipo-visita';
import { DxFormComponent } from 'devextreme-angular';
import Swal from 'sweetalert2';
import { TipoVisitaServices } from 'src/app/shared/services/serviciosApp/service.tipovisita';


@Component({
  selector: 'app-modal-tipo-visita',
  templateUrl: './modal-tipo-visita.component.html',
  styleUrls: ['./modal-tipo-visita.component.scss']
})
export class ModalTipoVisitaComponent implements OnInit {

  //variables of component 
  tipo: TipoVisita = new TipoVisita();
  accionForm: number = 1;
  visible: boolean = false;
  title: string = 'Nuevo Tipo';
  isValid: boolean = false;
  @ViewChild(DxFormComponent, { static: false }) form: DxFormComponent;

  constructor(private service: TipoVisitaServices) { }

  ngOnInit() {
  }

  form_fieldDataChange(e){
    this.tipo = e.component.option('formData');
    this.tipo.estatus = 'activo';
  }

  validate(){
    var dxForm = this.form.instance;
    var validateResult: any = dxForm.validate();
    this.isValid = validateResult.isValid;
    return this.isValid;
  }

  onClickSaveChanges(e) {
    if (this.validate() === true) {
      if (this.accionForm === 1) {

        this.service.post(this.tipo).subscribe(data => {
          this.closeModal();
          Swal.fire('', 'Agregado Correctamente', 'success');
        });
      } else if (this.accionForm === 2) {
        this.service.put(this.tipo).subscribe(data => {
          this.closeModal();
          Swal.fire('', 'Editado Correctamente', 'success');
        });
      }
    }
  }
  closeModal(){
    this.visible = false;
  }

  habilitarFormulario(){
    this.visible = true;

    if(this.accionForm == 1){
      this.title = 'Nuevo Tipo de Visita';
    }else if(this.accionForm == 2){
      this.title = 'Editar Tipo de Visita';
    }
  }

  eliminar(){

  }

}
