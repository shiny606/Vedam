import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, ModalController, NavController } from '@ionic/angular';
import { HttpClient, HttpParams } from "@angular/common/http";
import { RestapiserviceService } from "../restapiservice.service";
import { Network } from '@ionic-native/network/ngx';
import { ApisService } from 'src/app/services/apis.service';
import { NavigationExtras } from '@angular/router';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-contactus',
  templateUrl: 'contactus.page.html',
  styleUrls: ['contactus.page.scss'],
})
export class ContactusPage implements OnInit{
  networkType;
  contactResult;
  comments;
  profileResult;
  profileData;
  edit_flag:boolean;
  authToken;
  constructor(private navCtrl: NavController,public api: ApisService,
    public http: HttpClient,public network: Network,
    public restapiService: RestapiserviceService,  private route: ActivatedRoute) {}

  back(){
    this.navCtrl.navigateRoot(['tabs/tab1']);
  }

  ngOnInit(): void {
    this.authToken = localStorage.getItem('authToken');
     this.profileDetails(); 
  }

  profileDetails() {
    this.networkType = this.network.type;
    if (this.networkType == "none") {
      this.api.connectionAlert();
    } else {
      this.api.show();
      const params = new HttpParams({
        fromObject: {
          auth_token: this.authToken,
        },
      });
      console.log("params-Verses----" + params);
      this.restapiService.profileDetails(params).then((data) => {
        this.api.hide();
        this.profileResult = data;
       
        console.log("*************notifiResult" + JSON.stringify(this.profileResult)
        );
        if (this.profileResult.status == 200) {
          this.profileData=this.profileResult.data;
         
        } else if (this.profileResult.status == 201) {
          let message = this.profileResult.message;
          //this.api.errorToast(message);
        } else {
          let message = this.profileResult.message;
          console.log("message-----" + message);
          //this.api.errorToast(message);
        }
      });
      this.api.hide();
    }
  }

  contactUsClick() {
    this.networkType = this.network.type;
    if(this.networkType=='none'){
     this.api.connectionAlert();
    }else{
    this.api.show();
    console.log('comment====='+this.comments)
    if(this.comments==""||this.comments==undefined){
      this.api.errorToast("Please update comment");
      this.api.hide();
    }else{
    const params = new HttpParams({
      fromObject: {
        auth_token: this.authToken,
        subject:'Contact Form',
        query:this.comments
      },
    });
    this.restapiService.contactUs(params).then((data) => {
      this.api.hide();
      this.contactResult = data;
      console.log("*************contactResult" + JSON.stringify(this.contactResult));
      if (this.contactResult.status == 200) {
        this.api.errorToast("Message sent successfully");
        this.navCtrl.navigateRoot(['tabs/tab5']);
      } else if (this.contactResult.status == 201) {
        let message = this.contactResult.message;
        this.api.errorToast(message);
      } else {
        let message = this.contactResult.message;
        console.log("message-----" + message);
        this.api.errorToast(message);
      }
    });
    this.api.hide();
  }
 
  }
}


}
