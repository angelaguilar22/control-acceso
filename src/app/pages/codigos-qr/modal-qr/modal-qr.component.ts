import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import {codigoQR} from '../../../shared/modelos/codigo-qr';
import {Visitante} from '../../../shared/modelos/visitante';
import { DxFormComponent } from 'devextreme-angular';
import Swal from 'sweetalert2';
import { visitanteService } from 'src/app/shared/services/serviciosApp/service.visitante';
import { CodigoQrService } from 'src/app/shared/services/serviciosApp/service.codigoqr';

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
  visitantes: Visitante[];

  @ViewChild(DxFormComponent, { static: false }) form: DxFormComponent;
  @Output() emit: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private serviceVisitor: visitanteService, private service: CodigoQrService) { }

  ngOnInit() {
    this.getVisitantes();
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
    this.emit.emit(true);
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

  getVisitantes(){
    this.serviceVisitor.get().subscribe(data => {
      this.visitantes = data;
    });
  }

  crearCodigoQr(){
    var folio =  Math.floor(Math.random() * (99999999 - 1)) + 1;
    this.codigoQR.folio = folio.toString()+"-"+this.codigoQR.idVisitante;
    this.codigoQR.fechaCreacion = new Date();
    this.codigoQR.fechaEspira = new Date();

    this.service.post(this.codigoQR).subscribe(data => {
      console.log(data);
      this.closeModal();
      Swal.fire('', 'Agregado Correctamente', 'success');
    });
  }

}
