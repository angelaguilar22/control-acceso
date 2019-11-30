import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import of NPM camera and others
import { NgQRCodeReaderModule } from 'ng2-qrcode-reader';
import { WebcamModule } from 'ngx-webcam';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { HttpClientModule } from "@angular/common/http";


//imports of component
import { LoginFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DisplayDataComponent } from './pages/display-data/display-data.component';
import {
  DevExtremeModule,
  DxListModule,
  DxChartModule,
  DxBarGaugeModule,
  DxDataGridModule,
  DxFormModule,
  DxSchedulerModule,
  DxDateBoxModule,
  DxSwitchModule,
  DxTextBoxModule,
  DxProgressBarModule,
  DxRangeSliderModule,
  DxSelectBoxModule,
  DxAutocompleteModule,
  DxTagBoxModule,
  DxRadioGroupModule,
  DxColorBoxModule,
  DxCalendarModule,
  DxFilterBuilderModule,
  DxSliderModule,
  DxFileUploaderModule,
  DxDropDownBoxModule,
  DxNumberBoxModule,
  DxCheckBoxModule,
  DxTextAreaModule,
  DxLookupModule,
  DxButtonModule,
  DxAccordionModule,
  DxGalleryModule,
  DxTreeListModule,
  DxPivotGridModule,
  DxToolbarModule,
  DxMenuModule,
  DxTabsModule,
  DxTreeViewModule,
  DxTemplateModule
} from "devextreme-angular";
import { VisitasComponent } from './pages/visitas/visitas.component';
import { ModalVisitasComponent } from './pages/visitas/modal-visitas/modal-visitas.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ModalUsuariosComponent } from './pages/usuarios/modal-usuarios/modal-usuarios.component';
import { TipoVisitaComponent } from './pages/tipo-visita/tipo-visita.component';
import { VisitanteComponent } from './pages/visitante/visitante.component';
import { CodigosQrComponent } from './pages/codigos-qr/codigos-qr.component';
import { ModalTipoVisitaComponent } from './pages/tipo-visita/modal-tipo-visita/modal-tipo-visita.component';
import { ModalVisitanteComponent } from './pages/visitante/modal-visitante/modal-visitante.component';
import { QrReaderComponent } from './pages/visitas/modal-visitas/qr-reader/qr-reader.component';
import { CommonModule } from "@angular/common";
import { ModalQrComponent } from './pages/codigos-qr/modal-qr/modal-qr.component';

const routes: Routes = [
  {
    path: 'pages/codigos-qr/modal-qr',
    component: ModalQrComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/visitas/modal-visitas/qr-reader',
    component: QrReaderComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/visitante/modal-visitante',
    component: ModalVisitanteComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/tipo-visita/modal-tipo-visita',
    component: ModalTipoVisitaComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/codigos-qr',
    component: CodigosQrComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/visitante',
    component: VisitanteComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/tipo-visita',
    component: TipoVisitaComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/usuarios/modal-usuarios',
    component: ModalUsuariosComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/usuarios',
    component: UsuariosComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/visitas/modal-visitas',
    component: ModalVisitasComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/visitas',
    component: VisitasComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'display-data',
    component: DisplayDataComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    redirectTo: 'home',
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes ), DxDataGridModule, DxFormModule,
    DxDataGridModule,
    DxFormModule,
    DevExtremeModule,
    DxListModule,
    DxChartModule,
    DxBarGaugeModule,
    DxDataGridModule,
    DxFormModule,
    DxSchedulerModule,
    DxDateBoxModule,
    DxSwitchModule,
    DxTextBoxModule,
    DxProgressBarModule,
    DxRangeSliderModule,
    DxSelectBoxModule,
    DxAutocompleteModule,
    DxTagBoxModule,
    DxRadioGroupModule,
    DxColorBoxModule,
    DxCalendarModule,
    DxFilterBuilderModule,
    DxSliderModule,
    DxFileUploaderModule,
    DxDropDownBoxModule,
    DxNumberBoxModule,
    DxCheckBoxModule,
    DxTextAreaModule,
    DxLookupModule,
    DxButtonModule,
    DxAccordionModule,
    DxGalleryModule,
    DxTreeListModule,
    DxPivotGridModule,
    DxToolbarModule,
    DxMenuModule,
    DxTabsModule,
    DxTreeViewModule,
    DxTemplateModule,
    NgQRCodeReaderModule,
    WebcamModule,
    NgQrScannerModule,
    CommonModule,
    HttpClientModule
   ],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [HomeComponent, ProfileComponent, DisplayDataComponent, VisitasComponent, ModalVisitasComponent, UsuariosComponent, ModalUsuariosComponent, TipoVisitaComponent, VisitanteComponent, CodigosQrComponent, ModalTipoVisitaComponent, ModalVisitanteComponent, QrReaderComponent, ModalQrComponent]
})
export class AppRoutingModule { }
