import { Component, HostBinding } from '@angular/core';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { locale, loadMessages } from 'devextreme/localization';
declare var require: any;
const messagesES = require('devextreme/localization/messages/es.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

  constructor(private authService: AuthService, private screen: ScreenService, public appInfo: AppInfoService) {
    loadMessages(messagesES);
    locale(navigator.language);
   }

  isAutorized() {
    return this.authService.isLoggedIn;
  }
}
