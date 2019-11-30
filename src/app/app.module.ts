import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { AppRoutingModule } from './app-routing.module';
import { locale } from 'devextreme/localization';
import {
  DxTextBoxModule,
  DxValidatorModule,
  DxButtonModule
} from 'devextreme-angular';
import { DxTemplateModule, DxPopupModule, DxPopoverModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';



locale(navigator.language);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    LoginFormModule,
    AppRoutingModule,
    DxTextBoxModule,
    DxValidatorModule,
    DxButtonModule,
    DxTemplateModule,
    DxPopupModule,
    DxPopoverModule,
    HttpClientModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ,   CUSTOM_ELEMENTS_SCHEMA ],
  providers: [AuthService, ScreenService, AppInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
