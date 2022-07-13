import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  afterOTP:boolean;
  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
  }

  getOtp(){
    this.afterOTP = true;

    setTimeout(() => {
      this.navCtrl.navigateRoot(['otp']);
    }, 1000);


  }

}
