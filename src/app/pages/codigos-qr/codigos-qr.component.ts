
import { Component, ViewChild,OnInit } from '@angular/core';
import {test} from './test';
import { ModalQrComponent } from './modal-qr/modal-qr.component';

@Component({
  selector: 'app-codigos-qr',
  templateUrl: './codigos-qr.component.html',
  styleUrls: ['./codigos-qr.component.scss'],
})



export class CodigosQrComponent implements OnInit {

  items :test[];

  @ViewChild(ModalQrComponent, null) modal: ModalQrComponent;

  constructor() {
  }


  ngOnInit() {
    this.data();
  }

  data(){
    this.items = new Array<test>();

    for(let i = 0; i<100 ; i ++){
      var item = new test();
      item.visitante = 'Visitante_'+i;
      item.codigo = 'codigo_'+i;
      this.items.push(item);
    }
  } 

  
  abrirFormulario() {
    this.modal.title = 'Nuevo Codigo QR';
    this.modal.visible = true;
  }
  
}

