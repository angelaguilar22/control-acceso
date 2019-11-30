import { Component, ViewChild, ViewEncapsulation, OnInit, EventEmitter, Output } from '@angular/core';
import { QrScannerComponent } from 'angular2-qrscanner';

@Component({
  selector: 'app-qr-reader',
  templateUrl: './qr-reader.component.html',
  styleUrls: ['./qr-reader.component.scss']
})

export class QrReaderComponent implements OnInit {

  //Variable de QrReader
  @ViewChild(QrScannerComponent, null) qrScannerComponent: QrScannerComponent;

  //variables de salida
  @Output() QrValue: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.startQrReader();
  }

  //funciones de QrReader
  startQrReader() {
    this.qrScannerComponent.getMediaDevices().then(devices => {
      console.log(devices);
      const videoDevices: MediaDeviceInfo[] = [];
      for (const device of devices) {
        if (device.kind.toString() === 'videoinput') {
          videoDevices.push(device);
        }
      }

      if (videoDevices.length > 0) {
        let choosenDev;
        for (const dev of videoDevices) {
          if (dev.label.includes('front')) choosenDev = dev; break;
        }

        if (choosenDev) {
          this.qrScannerComponent.chooseCamera.next(choosenDev);
        } else {
          this.qrScannerComponent.chooseCamera.next(videoDevices[1]);
        }
      }
    });

    this.qrScannerComponent.capturedQr.subscribe(result => {
      console.log(result);
      this.QrValue.emit(result);
    });
  }
}
