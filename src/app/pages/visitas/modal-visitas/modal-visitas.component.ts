
import { Component, ViewChild, ViewEncapsulation, OnInit, Output, EventEmitter } from '@angular/core';
import { QrScannerComponent } from 'angular2-qrscanner';
import { delay } from 'q';
import Swal from 'sweetalert2';
import { UsuarioServices } from 'src/app/shared/services/serviciosApp/usuarios.service';
import { visitas } from 'src/app/shared/modelos/visita';

@Component({
  selector: 'app-modal-visitas',
  templateUrl: './modal-visitas.component.html',
  styleUrls: ['./modal-visitas.component.scss']
})
export class ModalVisitasComponent implements OnInit {

  //variables to popup
  visible: boolean = false;
  title: string = 'Agregar Visita';
  visibleForm: boolean = false;
  visibleButtons: boolean = true;
  visibleQR: boolean = false;
  showButtons: boolean = false;
  visita: visitas = new visitas();
  @Output() reload: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private service: UsuarioServices) { }

  ngOnInit() {
  }

  closeModal() {
    this.visible = false;
    this.visibleForm = false;
    this.visibleQR = false;
    this.showButtons = false;
    this.visibleButtons = true;
  }

  visitaQR() {
    this.visibleButtons = false;
    this.visibleQR = true;
  }

  visitaGeneral() {
    this.visibleButtons = false;
    this.visibleForm = true;
    this.showButtons = true;
  }

  change() {
    this.visibleForm = false;
    this.showButtons = false;
    this.visibleQR = false;
    this.visibleButtons = true;
  }

  getQrValue(e) {
    var date = new Date();

    console.log(e, 'Valor leido');
    if (e) {
      this.visita.idTipoVisita = 1;
      this.visita.idVisitante = 2;
      this.visita.placa = 'GVU6107'
      this.visita.permanencia = 0;
      this.visita.referencia = 'Visita por QR'+e;
      this.visita.fechaIngreso = date.toString();
      this.visita.fechaSalida = date.toString();
      this.visita.estatus = 'ingreso';
      this.visita.idUsuario = 1;


      this.service.postVisita(this.visita).subscribe(data => {
        this.closeModal();
        Swal.fire('', 'Agregado Correctamente', 'success');
        this.reload.emit(true);
      });
    
    }
  }


}
