import { Component, OnInit,ViewChild } from '@angular/core';
import { NgOtpInputComponent, } from 'ng-otp-input';
import { AlertController, MenuController, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  OTP: string = '';
  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
  }


  resetPassword(){
    this.navCtrl.navigateRoot(['resetpassword']);
  }

otpController(event,next,prev, index){


    if(index == 6) {
      console.log("submit")
    }
    if(event.target.value.length < 1 && prev){
      prev.setFocus()
    }
    else if(next && event.target.value.length>0){
      next.setFocus();
    }
    else {
     return 0;
    } 
 }



 moveFocus(event, nextElement, previousElement) {
  console.log(event.keyCode);
  console.log(event);
  if (event.keyCode === 8 && previousElement) {
    previousElement.setFocus();
  } else if (event.keyCode >= 48 && event.keyCode <= 57) {
    if (nextElement) {
      nextElement.setFocus();
    }
  } else if (event.keyCode >= 96 && event.keyCode <= 105) {
    if (nextElement) {
      nextElement.setFocus();
    }
  } else {
    event.path[0].value = '';
  }
}


}
