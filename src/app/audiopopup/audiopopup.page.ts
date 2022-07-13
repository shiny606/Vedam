import { Component } from '@angular/core';
import { AlertController, MenuController, ModalController,NavParams, NavController } from '@ionic/angular';
import { HttpClient, HttpParams } from "@angular/common/http";
import { RestapiserviceService } from "../restapiservice.service";
import { Network } from '@ionic-native/network/ngx';
import { ApisService } from 'src/app/services/apis.service';
import { NavigationExtras } from '@angular/router';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-audiopopup',
  templateUrl: 'audiopopup.page.html',
  styleUrls: ['audiopopup.page.scss'],
})
export class AudiopopupPage {
  audioUrls;
  constructor(private navCtrl: NavController,public modalController: ModalController,
    public api: ApisService,private navParam: NavParams,
    public http: HttpClient,public network: Network,
    public restapiService: RestapiserviceService,  private route: ActivatedRoute) {}

  // back(){
  //   this.navCtrl.navigateRoot(['tabs/tab1']);
  // }

  ngOnInit() {
    this.audioUrls = this.navParam.get("audioUrls");
   
    
  }

  closeClick(){
    this.modalController.dismiss();
  }
 

}
