import { Component } from '@angular/core';
import { AlertController, MenuController, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-social',
  templateUrl: 'social.page.html',
  styleUrls: ['social.page.scss'],
})
export class SocialPage {

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  constructor(private navCtrl: NavController,) {}
  back(){
    this.navCtrl.navigateRoot(['tabs/tab1']);
  }
}
