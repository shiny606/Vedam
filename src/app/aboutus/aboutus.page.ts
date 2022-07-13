import { Component } from '@angular/core';
import { AlertController, MenuController, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-aboutus',
  templateUrl: 'aboutus.page.html',
  styleUrls: ['aboutus.page.scss'],
})
export class AboutusPage {

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  constructor(private navCtrl: NavController,) {}

  back(){
    this.navCtrl.navigateRoot(['tabs/tab1']);
  }

  topicClick(){
    this.navCtrl.navigateRoot(['sciencetopic']);
  }


}
