/* import { ScannerService } from './../services/Scanner.service'; */
import { FirebaseService } from 'src/app/services/firebase.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import jsQR from 'jsqr';
/* import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'; */


@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {
  
  data: any;

  scanActive = false;
  scanResult = null;

  @ViewChild('video', { static: false }) video: ElementRef;
  @ViewChild('canvas', { static: false }) canvas: ElementRef;

  videoElement: any;
  canvasElement: any;
  loading: HTMLIonLoadingElement;
  canvasContext: any;

  constructor(
    private fs: FirebaseService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    /* private scannerService: ScannerService */) { }

  ngOnInit(): void {
    
    throw new Error('Method not implemented.');

/*     this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
    }).catch(err => {
      console.log('Error', err);
    }); */
}

//////////// FUNCIONALIDAD CÓDIGO DE BARRAS - LECTOR NUMEROS ////////////

/* ngOnInit() {
  this.scannerService.getProducts()
  .subscribe((data) => this.product = data?.product.image_url);
}
getProductFromService(): void{
  this.scannerService.searchProducts(this.query).pipe(
    take(1)).subscribe((res:any)=>{
      console.log('res',res);
    this.product = [...res.product.image_url];
    console.log('product image',this.product);
  });
} */

//////////// CÓDIGO DE BARRAS ////////////

/* scan(){
  this.scannerService.startScan();
}
stopScan() {
  this.scannerService.stopScanner();
} */


  onLogout() {
    this.fs.logout();
  }

  ngAfterViewInit() {
    this.videoElement = this.video.nativeElement;
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');
  }

  async startScan() {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' }
    });

    this.videoElement.srcObject = stream;
    this.videoElement.setAttribute('playinline', true);
    this.videoElement.play();
    this.loading = await this.loadingCtrl.create({});
    await this.loading.present();

    requestAnimationFrame(this.scan.bind(this));
  }


  async scan() {
    console.log('SCAN');
    if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
      if (this.loading) {
        await this.loading.dismiss();
        this.loading = null;
        this.scanActive = true;
      }

      this.canvasElement.height = this.videoElement.videoHeight;
      this.canvasElement.width = this.videoElement.videoWidth;

      this.canvasContext.drawImage(
        this.videoElement,
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );

      const imageData = this.canvasContext.getImageData(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );

      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });

      console.log('code: ', code);

      if (code) {
        this.scanActive = false;
        this.scanResult = code.data;
        this.showQrToast();

      } else {
        if (this.scanActive) {
          requestAnimationFrame(this.scan.bind(this));
        }
      }

    } else {
      requestAnimationFrame(this.scan.bind(this));
    }
  }

  reset() {
    this.scanResult = null;
  }

  stopScan() {
    this.scanActive = false;
  }

  async showQrToast() {
    const toast = await this.toastCtrl.create({
      message: `Open ${this.scanResult}?`,
      position: 'top',
      buttons: [{
        text: 'Open',
        handler: () => {
          window.open(this.scanResult, '_system', 'location=yes')
        }
      }]
    });
    toast.present();
  } 
}


