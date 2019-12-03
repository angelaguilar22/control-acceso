
import { Component, ViewChild, ViewEncapsulation, OnInit, Output, EventEmitter } from '@angular/core';
import { QrScannerComponent } from 'angular2-qrscanner';
import { delay } from 'q';
import Swal from 'sweetalert2';
import { UsuarioServices } from 'src/app/shared/services/serviciosApp/usuarios.service';
import { visitas } from 'src/app/shared/modelos/visita';
import { Visitante } from 'src/app/shared/modelos/visitante';
import { visitanteService } from 'src/app/shared/services/serviciosApp/service.visitante';
import { TipoVisita } from 'src/app/shared/modelos/tipo-visita';
import { TipoVisitaServices } from 'src/app/shared/services/serviciosApp/service.tipovisita';
import { visitasService } from 'src/app/shared/services/serviciosApp/visitas.services';

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
  visitantes: Visitante[];
  tiposVisitas: TipoVisita[];

  @Output() reload: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private service: visitasService, private serviceVisitantes: visitanteService,
    private serviceTipo: TipoVisitaServices) { }

  ngOnInit() {
    this.getVisitantes();
    this.getTiposVisitas();
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

    console.log(e.split('-'), 'Valor leido');
    if (e) {
      this.visita.idTipoVisita = 4;
      this.visita.idVisitante = e.split('-')[1];
      this.visita.placa = ''
      this.visita.permanencia = 0;
      this.visita.referencia = 'Visita por QR - ' + e.split('-')[0];
      this.visita.fechaIngreso = date.toString();
      this.visita.fechaSalida = date.toString();
      this.visita.estatus = 'ingreso';
      this.visita.idUsuario = 1;


      this.service.postVisita(this.visita).subscribe(data => {
        this.closeModal();
        Swal.fire('', 'Agregada Correctamente', 'success');
        this.reload.emit(true);
      });

    }
  }

  getVisitantes() {
    this.serviceVisitantes.get().subscribe(data => {
      this.visitantes = data;
    });
  }

  getTiposVisitas() {
    this.serviceTipo.get().subscribe(data => {
      this.tiposVisitas = data;
    });
  }

  form_fieldDataChange(e) {
    this.visita = e.component.option('formData');
    this.visita.fechaIngreso = new Date();
    this.visita.idUsuario = 1;
    this.visita.estatus = 'ingreso';
    this.visita.permanencia = 1;
  }

  crearVisita() {
    console.log(this.visita);
    this.service.postVisitaGeneral(this.visita).subscribe(data => {
      this.closeModal();
      Swal.fire('', 'Agregada Correctamente', 'success');
      this.reload.emit(true);
    });
  }
}
