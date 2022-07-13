import { Component,OnInit } from '@angular/core';
import { AlertController, MenuController, ModalController, NavController } from '@ionic/angular';
import { HttpClient, HttpParams } from "@angular/common/http";
import { RestapiserviceService } from "../restapiservice.service";
import { Network } from '@ionic-native/network/ngx';
import { ApisService } from 'src/app/services/apis.service';
import { NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-explore',
  templateUrl: 'explore.page.html',
  styleUrls: ['explore.page.scss'],
})
export class ExplorePage implements OnInit{
  exploreResult;
  exploreData;
  networkType;
  authToken;

  constructor(private navCtrl: NavController,public api: ApisService,
    public http: HttpClient,public network: Network,
    public restapiService: RestapiserviceService) {}


  ngOnInit() {
    this.authToken = localStorage.getItem('authToken');
      this.exploreList(); 
  }
  exploreList() {
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
    this.restapiService.exploreList(params).then((data) => {
      this.api.hide();
      this.exploreResult = data;
      console.log("*************exploreList" + JSON.stringify(this.exploreResult));
      if (this.exploreResult.status == 200) {
        this.exploreData = this.exploreResult.explore_category;
        console.log("exploreData-----" + this.exploreResult);
      } else if (this.exploreResult.status == 201) {
        let message = this.exploreResult.message;
        this.api.errorToast(message);
      } else {
        let message = this.exploreResult.message;
        this.api.errorToast(message);
        console.log("message-----" + message);
      }
    });
    this.api.hide();
  }
 
  }

  ScienceClick(cateName){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        category: cateName,       
      }
  };
  this.navCtrl.navigateRoot(["science"],navigationExtras);
  }
  // DebateClick(){
  //   this.navCtrl.navigateRoot(['debate']);
  // }
  // SpritualClick(){
  //   this.navCtrl.navigateRoot(['spritual']);
  // }
  // SocialClick(){
  //   this.navCtrl.navigateRoot(['social']);
  // }
  // CurrentClick(){
  //   this.navCtrl.navigateRoot(['current']);
  // }

}
