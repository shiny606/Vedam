import { Component } from '@angular/core';
import { AlertController, MenuController, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-spritual',
  templateUrl: 'spritual.page.html',
  styleUrls: ['spritual.page.scss'],
})
export class SpritualPage {

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
