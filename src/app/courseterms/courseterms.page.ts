import { Component } from '@angular/core';
import { AlertController, MenuController, ModalController, NavController } from '@ionic/angular';
import { PopupPage } from '../popup/popup.page';
import { HttpClient, HttpParams } from "@angular/common/http";
import { RestapiserviceService } from "../restapiservice.service";
import { Network } from '@ionic-native/network/ngx';
import { ApisService } from 'src/app/services/apis.service';
import { NavigationExtras } from '@angular/router';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-courseterms',
  templateUrl: 'courseterms.page.html',
  styleUrls: ['courseterms.page.scss'],
})
export class CoursetermsPage {
  networkType;
  Grade;
  Term;
  termResult;
  termData;
  termImage;
  termName;
  lockStatus;
  authToken;
  constructor(private navCtrl: NavController,public modalController: ModalController,
    public api: ApisService,
    public http: HttpClient,public network: Network,
    public restapiService: RestapiserviceService,  private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.Grade = params["Grade"];
      this.Term = params["Term"];
      console.log('grade=1=='+this.Grade)
      console.log('term=1=='+this.Term)
      this.authToken = localStorage.getItem('authToken');
      this.courseTermsList();  
    });
  }

  back(){
    this.navCtrl.navigateRoot(['tabs/tab1']);
  }

  ngOnInit() {
    this.authToken = localStorage.getItem('authToken');
    this.courseTermsList();  
  }


  courseTerms(topics,id){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        Grade:this.Grade, 
        Term:this.Term,
        Topics:topics,
        Id:id,
      }
  };
  this.navCtrl.navigateRoot(["coursetopics"],navigationExtras);
  }


  async courseTermsLocked(topic,id){
    const modal = await this.modalController.create({
      component: PopupPage,    
      showBackdrop: true,        
      backdropDismiss:false, 
      swipeToClose:true,   
      cssClass: 'change-address-shipping-modal',
      componentProps:{
        //'dstatus':this.dstatus
      }
    });

    modal.onDidDismiss().then((modelData) => {
      console.log("onDidDismiss");
      //this.dstatus = modelData;
      
    });

    return await modal.present();
  }
  courseTermsList() {
    this.networkType = this.network.type;
    if(this.networkType=='none'){
     this.api.connectionAlert();
    }else{
    this.api.show();
    const params = new HttpParams({
      fromObject: {
        auth_token: this.authToken,
        grade:this.Grade,
        term_type:this.Term,
      },
    });
    console.log("params-----" + params);
    this.restapiService.courseTerms(params).then((data) => {
      this.api.hide();
      this.termResult = data;
      console.log("*************termResult" + JSON.stringify(this.termResult));
      if (this.termResult.status == 200) {
        this.termData = this.termResult.topics;
        this.termImage = this.termResult.cover_image;
        this.termName = this.termResult.term_name;
        this.lockStatus = this.termResult.lock_status;
        console.log("termData-----" + this.termData);
      } else if (this.termResult.status == 201) {
        let message = this.termResult.message;
        this.termData = [];
        this.api.errorToast(message);
      } else {
        let message = this.termResult.message;
        console.log("message-----" + message);
        this.api.errorToast(message);
        this.termData = [];
      }
    });
    this.api.hide();
  }
 
  }


}
