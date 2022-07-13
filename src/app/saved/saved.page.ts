import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, ModalController, NavController } from '@ionic/angular';
import { HttpClient, HttpParams } from "@angular/common/http";
import { RestapiserviceService } from "../restapiservice.service";
import { Network } from '@ionic-native/network/ngx';
import { ApisService } from 'src/app/services/apis.service';
import { NavigationExtras } from '@angular/router';
import { ActivatedRoute, Router } from "@angular/router";
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl,
} from "@angular/platform-browser";
import { SavedvideopopupPage } from '../savedvideopopup/savedvideopopup.page';
@Component({
  selector: 'app-saved',
  templateUrl: 'saved.page.html',
  styleUrls: ['saved.page.scss'],
})
export class SavedPage implements OnInit{
  networkType;
  versesResult;
  versesData;
  factsResult;
  factsData;
  exploreResult;
  exploreData;
  videoUrl;
  massTimingsHtml;
  trustedDashboardUrl: SafeResourceUrl;
  authToken;
  constructor(private navCtrl: NavController,public api: ApisService,public modalController: ModalController,
    public http: HttpClient,public network: Network,
    public restapiService: RestapiserviceService,  private route: ActivatedRoute, private sanitizer: DomSanitizer,) {
      //this.massTimingsHtml = this.getInnerHTMLValue();
     
    }

  back(){
    this.navCtrl.navigateRoot(['tabs/tab1']);
  }


  ngOnInit() {
    this.authToken = localStorage.getItem('authToken');
    this.BookMarkVersesList();  
    this.BookMarkFactsList();
    this.BookMarkExploreList();
  }

  BookMarkVersesList() {
    this.networkType = this.network.type;
    if(this.networkType=='none'){
     this.api.connectionAlert();
    }else{
    this.api.show();
    const params = new HttpParams({
      fromObject: {
        auth_token: this.authToken,
        type:"Verses"
      },
    });
    this.restapiService.bookmarkList(params).then((data) => {
      this.api.hide();
      this.versesResult = data;
      console.log("*************contactResult" + JSON.stringify(this.versesResult));
      if (this.versesResult.status == 200) {
        this.versesData = this.versesResult.bookmarks;
        console.log("termData-----" + this.versesData);
      } else if (this.versesResult.status == 201) {
        let message = this.versesResult.message;
        this.api.errorToast(message);
      } else {
        let message = this.versesResult.message;
        console.log("message-----" + message);
        this.api.errorToast(message);
      }
    });
    this.api.hide();
  }
 
  }

  BookMarkFactsList() {
    this.networkType = this.network.type;
    if(this.networkType=='none'){
     this.api.connectionAlert();
    }else{
    this.api.show();
    const params = new HttpParams({
      fromObject: {
        auth_token: this.authToken,
        type:"Facts"
      },
    });
    this.restapiService.bookmarkList(params).then((data) => {
      this.api.hide();
      this.factsResult = data;
      console.log("*************contactResult" + JSON.stringify(this.factsResult));
      if (this.factsResult.status == 200) {
        this.factsData = this.factsResult.bookmarks;
        console.log("termData-----" + this.factsData);
      } else if (this.factsResult.status == 201) {
        let message = this.factsResult.message;
        this.api.errorToast(message);
      } else {
        let message = this.factsResult.message;
        console.log("message-----" + message);
        this.api.errorToast(message);
      }
    });
    this.api.hide();
  }
 
  }

  BookMarkExploreList() {
    this.networkType = this.network.type;
    if(this.networkType=='none'){
     this.api.connectionAlert();
    }else{
    this.api.show();
    const params = new HttpParams({
      fromObject: {
        auth_token: this.authToken,
        type:"Explore"
      },
    });
    this.restapiService.bookmarkList(params).then((data) => {
      this.api.hide();
      this.exploreResult = data;
      console.log("*************exploreResult" + JSON.stringify(this.exploreResult));
      if (this.exploreResult.status == 200) {
        this.exploreData = this.exploreResult.bookmarks;
        console.log("exploreData--xxx---" + this.exploreData);
        this.videoUrl = this.exploreData[0].data;
      } else if (this.exploreResult.status == 201) {
        let message = this.exploreResult.message;
        this.api.errorToast(message);
      } else {
        let message = this.exploreResult.message;
        console.log("message-----" + message);
        this.api.errorToast(message);
      }
    });
    this.api.hide();
  }
 
  }

  getInnerHTMLValue(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }


  async savedvideopopup(url){

    const modal = await this.modalController.create({
      // component: ScanuploadimgPage,
      component: SavedvideopopupPage,
      cssClass: 'video-modal',
      backdropDismiss:false,
      componentProps: {
        videoUrls: url,
      },
    });
    modal.onWillDismiss().then(() => {
     
    });
    modal.present();
  }
}
