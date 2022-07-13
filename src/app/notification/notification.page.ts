import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, ModalController, NavController } from '@ionic/angular';
import { HttpClient, HttpParams } from "@angular/common/http";
import { RestapiserviceService } from "../restapiservice.service";
import { Network } from "@ionic-native/network/ngx";
import { ApisService } from "src/app/services/apis.service";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-notification',
  templateUrl: 'notification.page.html',
  styleUrls: ['notification.page.scss'],
})
export class NotificationPage implements OnInit{

  networkType;
  notifiResult;
  factsnotifiResult;
  explorenotifiResult;
  click;
  click1;
  click2;
  count: number = 0;
  count1: number = 0;
  count2: number = 0;
  settings = "";
  settings1 = "";
  settings2 = "";
  authToken;
  constructor(private navCtrl: NavController,public modalController: ModalController,
    public api: ApisService,
    public http: HttpClient,
    public network: Network,
    public restapiService: RestapiserviceService,
    private route: ActivatedRoute) {}

  back(){
    this.navCtrl.navigateRoot(['tabs/tab1']);
  }

  ngOnInit(): void {
    this.authToken = localStorage.getItem('authToken');
    this.settings = localStorage.getItem('verse_notify')
    this.settings1 = localStorage.getItem('facts_notify')
    this.settings2 = localStorage.getItem('explore_notify')
    this.verseNotification();
    this.factsNotification();
    this.exploreNotification();
  }

  settingsClick(click){
    this.settings =click;
    this.verseNotification();
    // this.click = !click;
    // if(this.click){
    // this.count++;
    // }else{
    // this.count--;
    // }
    // this.notifi();
    }
    settingsClick1(click1){
      this.settings1 =click1;
      this.factsNotification();
      // this.click1 = !click1;
      // if(this.click1){
      // this.count1++;
      // }else{
      // this.count1--;
      // }
      // this.notifi1();
      }
      settingsClick2(click2){
        this.settings2 =click2;
        this.exploreNotification();
        // this.click2 = !click2;
        // if(this.click2){
        // this.count2++;
        // }else{
        // this.count2--;
        // }
        // this.notifi2();
        }

    notifi(){
    if(this.count==0){
      this.settings = "on";
    }else{
      this.settings = "off";
    }
    this.verseNotification();
  }
  notifi1(){
    if(this.count1==0){
      this.settings1 = "on";
    }else{
      this.settings1 = "off";
    }
   
    this.factsNotification();
  
  }
  notifi2(){
    if(this.count2==0){
      this.settings2 = "on";
    }else{
      this.settings2 = "off";
    }
    this.exploreNotification();
    
  }

  verseNotification() {
    this.networkType = this.network.type;
    if (this.networkType == "none") {
      this.api.connectionAlert();
    } else {
      this.api.show();
      const params = new HttpParams({
        fromObject: {
          auth_token: this.authToken,
          type:'Verses',
          setting:this.settings
        },
      });
      console.log("params-Verses----" + params);
      this.restapiService.notificationSet(params).then((data) => {
        this.api.hide();
        this.notifiResult = data;
        console.log(
          "*************notifiResult" + JSON.stringify(this.notifiResult)
        );
        if (this.notifiResult.status == 200) {
        //this.api.errorToast('Verses notification settings changed successfully')
        this.settings = this.notifiResult.verse_notify;
        localStorage.setItem('verse_notify',this.notifiResult.verse_notify);
                
        //this.navCtrl.navigateRoot(['tabs/tab5']);
        } else if (this.notifiResult.status == 201) {
          let message = this.notifiResult.message;
          this.api.errorToast(message);
        } else {
          let message = this.notifiResult.message;
          console.log("message-----" + message);
          this.api.errorToast(message);
        }
      });
      this.api.hide();
    }
  }
  factsNotification() {
    this.networkType = this.network.type;
    if (this.networkType == "none") {
      this.api.connectionAlert();
    } else {
      this.api.show();
      const params = new HttpParams({
        fromObject: {
          auth_token: this.authToken,
          type:'Facts',
          setting:this.settings1
        },
      });
      console.log("params-Facts----" + params);
      this.restapiService.notificationSet(params).then((data) => {
        this.api.hide();
        this.factsnotifiResult = data;
        console.log(
          "*************factsnotifiResult" + JSON.stringify(this.factsnotifiResult)
        );
        if (this.factsnotifiResult.status == 200) {
          //this.api.errorToast('Facts notification settings changed successfully')
          localStorage.setItem('facts_notify',this.factsnotifiResult.facts_notify);
          this.settings1 = this.factsnotifiResult.facts_notify;
          //this.navCtrl.navigateRoot(['tabs/tab5']);
        } else if (this.factsnotifiResult.status == 201) {
          let message = this.factsnotifiResult.message;
          this.api.errorToast(message);
        } else {
          let message = this.factsnotifiResult.message;
          console.log("message-----" + message);
          this.api.errorToast(message);
        }
      });
      this.api.hide();
    }
  }
  exploreNotification() {
    this.networkType = this.network.type;
    if (this.networkType == "none") {
      this.api.connectionAlert();
    } else {
      this.api.show();
      const params = new HttpParams({
        fromObject: {
          auth_token: this.authToken,
          type:'Explore',
          setting:this.settings2
        },
      });
      console.log("params-Explore----" + params);
      this.restapiService.notificationSet(params).then((data) => {
        this.api.hide();
        this.explorenotifiResult = data;
        console.log(
          "*************explorenotifiResult" + JSON.stringify(this.explorenotifiResult)
        );
        if (this.explorenotifiResult.status == 200) {
          //this.api.errorToast('Explore notification settings changed successfully')
          localStorage.setItem('explore_notify',this.explorenotifiResult.explore_notify);
          this.settings2 = this.explorenotifiResult.explore_notify;
        //this.navCtrl.navigateRoot(['tabs/tab5']);
        } else if (this.explorenotifiResult.status == 201) {
          let message = this.explorenotifiResult.message;
          this.api.errorToast(message);
        } else {
          let message = this.explorenotifiResult.message;
          console.log("message-----" + message);
          this.api.errorToast(message);
        }
      });
      this.api.hide();
    }
  }

}
