import { Component } from '@angular/core';
import { AlertController, MenuController, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-current',
  templateUrl: 'current.page.html',
  styleUrls: ['current.page.scss'],
})
export class CurrentPage {

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
