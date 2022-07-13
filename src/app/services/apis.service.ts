
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Network } from '@ionic-native/network/ngx';
import { NavController,AlertController,MenuController,ActionSheetController, ToastController, LoadingController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
 
  networkType;
  loader: any;
  isLoading = false;
  constructor(
    private http: HttpClient,
   public network: Network,  private toastCtrl: ToastController,
   public loadingCtrl: LoadingController,
    public alertCtrl:AlertController,
  ) {
   
    this.networkType = this.network.type;
    //nativeHttp.setDataSerializer('json');
  }

  translate(str) {
    return str;
  }



  async  connectionAlert(){
    
    const alert = await this.alertCtrl.create({
         header: 'Alert',
         subHeader: 'No internet connection',
         message: 'Sorry, no internet connectivity detected. Please reconnect and try again.',
         buttons: ['OK']
       });
    
       await alert.present();
    
    }

    async show(msg?) {
      this.isLoading = true;
      return await this.loadingCtrl.create({
        message: msg,
        spinner: 'bubbles',
      }).then(a => {
        a.present().then(() => {
          //console.log('presented');
          if (!this.isLoading) {
            a.dismiss().then(() => console.log('abort presenting'));
          }
        });
      });
    }
  
    async hide() {
      this.isLoading = false;
      return await this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
    }


    async showWarningAlert(msg) {
      const alert = await this.alertCtrl.create({
        header: 'Warning',
        message: msg,
        buttons: ['OK']
      });
  
      await alert.present();
    }
  
    async showSimpleAlert(msg) {
      const alert = await this.alertCtrl.create({
        header: '',
        message: msg,
        buttons: ['OK']
      });
  
      await alert.present();
    }
  
    /*
     Show Error Alert Message
     param : msg = message to display
     Call this method to show Error Alert,
     */
    async showErrorAlert(msg) {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: msg,
        buttons: ['OK']
      });
  
      await alert.present();
    }

    async showToast(msg, colors, positon) {
      const toast = await this.toastCtrl.create({
        message: msg,
        duration: 2000,
        color: colors,
        position: positon
      });
      toast.present();
    }
    async shoNotification(msg, colors, positon) {
      const toast = await this.toastCtrl.create({
        message: msg,
        duration: 4000,
        color: colors,
        position: positon,
        buttons: [
          {
            text: 'Ok',
            role: 'cancel',
            handler: () => {
              // console.log('Cancel clicked');
            }
          }
        ]
      });
      toast.present();
    }
  
    async errorToast(msg) {
      const toast = await this.toastCtrl.create({
        message: msg,
        duration: 2000,
      });
      toast.present();
    }
  


}


