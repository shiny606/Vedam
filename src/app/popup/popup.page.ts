import { Component } from '@angular/core';
import { AlertController, MenuController, ModalController, NavController } from '@ionic/angular';
import { HttpClient, HttpParams } from "@angular/common/http";
import { RestapiserviceService } from "../restapiservice.service";
import { Network } from '@ionic-native/network/ngx';
import { ApisService } from 'src/app/services/apis.service';
import { NavigationExtras } from '@angular/router';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-popup',
  templateUrl: 'popup.page.html',
  styleUrls: ['popup.page.scss'],
})
export class PopupPage {
  networkType;
  adminResult;
  adminData;
  authToken;
  constructor(private navCtrl: NavController,public modalController: ModalController,
    public api: ApisService,
    public http: HttpClient,public network: Network,
    public restapiService: RestapiserviceService,  private route: ActivatedRoute) {
      this.authToken = localStorage.getItem('authToken');
    }

  // back(){
  //   this.navCtrl.navigateRoot(['tabs/tab1']);
  // }

  closeClick(){
    this.modalController.dismiss();
  }
  notNow(){
    this.modalController.dismiss();
  }

  connectNow() {
    this.networkType = this.network.type;
    if(this.networkType=='none'){
     this.api.connectionAlert();
    }else{
    this.api.show();
    const params = new HttpParams({
      fromObject: {
        auth_token: this.authToken,
      },
    });
    console.log("params-----" + params);
    this.restapiService.contactAdmin(params).then((data) => {
      this.api.hide();
      this.adminResult = data;
      console.log("*************adminResult" + JSON.stringify(this.adminResult));
      if (this.adminResult.status == 200) {
        this.api.errorToast("Request sent to admin");
        this.modalController.dismiss();
        this.navCtrl.navigateRoot(['tabs/tab1']);
        //this.adminData = this.adminResult.topics;
        // this.termImage = this.termResult.cover_image;
        // this.termName = this.termResult.term_name;
        // this.lockStatus = this.termResult.lock_status;
        console.log("adminData-----" + this.adminData);
      } else if (this.adminResult.status == 201) {
        let message = this.adminResult.message;
        this.adminData = [];
        this.api.errorToast(message);
      } else {
        let message = this.adminResult.message;
        console.log("message-----" + message);
        this.api.errorToast(message);
        this.adminData = [];
      }
    });
    this.api.hide();
  }
 
  }


}
