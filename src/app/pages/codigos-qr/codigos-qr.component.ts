
import { Component, ViewChild, OnInit } from '@angular/core';
import { test } from './test';
import { ModalQrComponent } from './modal-qr/modal-qr.component';
import { CodigoQrService } from 'src/app/shared/services/serviciosApp/service.codigoqr';
import Swal from 'sweetalert2';

import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-codigos-qr',
  templateUrl: './codigos-qr.component.html',
  styleUrls: ['./codigos-qr.component.scss'],
})



export class CodigosQrComponent implements OnInit {

  items: test[];
  codigoQr: any;

  @ViewChild(ModalQrComponent, null) modal: ModalQrComponent;

  constructor(private service: CodigoQrService, private socket: Socket) {

    this.socket.on('channel01', function(msg){
      console.log('Recepcion de emit enviado por el server', msg);
    });
  }


  ngOnInit() {
    this.data();
  }

  data() {
    this.service.get().subscribe(data => {
      console.log(data);
      this.items = data;
    })
  }


  abrirFormulario() {
    this.modal.title = 'Nuevo Codigo QR';
    this.modal.visible = true;
  }

  refresh(e) {
    if (e)
      this.data();
  }

  handleEliminar(QR) {
    this.codigoQr = QR;
  }

  eliminar(codigo) {
    const swalWithBoostrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true
    });
    Swal.fire({
      title: '¿Deseas eliminar este codigo QR',
      text: 'Se eliminara permanentemente el codigo QR',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      reverseButtons: false
    }).then(result => {
      if (result.value) {
        console.log(codigo, 'elemento');
        this.service.delete(codigo).subscribe(data => {
          this.data();
          Swal.fire('', 'Eliminado Correctamente', 'success');
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBoostrapButtons.fire('Cancelado', '', 'error');
      }
    });
  }


  sendEmit(){
    console.log('Enviar emit to server');
    this.socket.emit('channel01','Hola mundo');
  }
}

