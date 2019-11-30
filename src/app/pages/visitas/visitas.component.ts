import { Component, OnInit, ViewChild } from '@angular/core';
import {ModalVisitasComponent} from './modal-visitas/modal-visitas.component';
import { visitas } from 'src/app/shared/modelos/visita';
import { UsuarioServices } from 'src/app/shared/services/serviciosApp/usuarios.service';

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.component.html',
  styleUrls: ['./visitas.component.scss']
})
export class VisitasComponent implements OnInit {

  visitas: visitas[];
  key: string = 'id';
  //Viewchild
  @ViewChild(ModalVisitasComponent, null) modal : ModalVisitasComponent;

  constructor(private service: UsuarioServices) { }

  ngOnInit() {
    this.getVisitas();
  }

  getVisitas(){
    this.service.getVisitas().subscribe(data => {
      console.log(data);
      this.visitas = data;
    });
  }

  agregarVisita(){
    this.modal.visible = true;
  }

  recargar(e){  
    if(e)
      this.getVisitas();
  }



}
