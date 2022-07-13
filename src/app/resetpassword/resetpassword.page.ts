import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {

  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
  }

  Resetsubmit(){
    this.navCtrl.navigateRoot(['tabs/tab1']);
  }

}
