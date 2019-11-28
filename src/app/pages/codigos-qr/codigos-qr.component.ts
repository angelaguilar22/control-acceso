import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codigos-qr',
  templateUrl: './codigos-qr.component.html',
  styleUrls: ['./codigos-qr.component.scss']
})
export class CodigosQrComponent implements OnInit {
  public myAngularxQrCode: string = 'Algo';

  ngxQrcode2 = 'https://www.npmjs.com/package/ngx-qrcode2';
  techiediaries = 'https://www.npmjs.com/~techiediaries';
  letsboot = 'https://www.letsboot.com/';
  
  constructor() {
    this.myAngularxQrCode = 'Your QR code data string';
  }

  ngOnInit() {
  }

}
