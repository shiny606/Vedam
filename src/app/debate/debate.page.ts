import { Component } from '@angular/core';
import { AlertController, MenuController, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-debate',
  templateUrl: 'debate.page.html',
  styleUrls: ['debate.page.scss'],
})
export class DebatePage {

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
