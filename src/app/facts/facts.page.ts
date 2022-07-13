import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, ModalController, NavController } from '@ionic/angular';
import { GallarypopupPage } from '../gallarypopup/gallarypopup.page';
import { HttpClient, HttpParams } from "@angular/common/http";
import { RestapiserviceService } from "../restapiservice.service";
import { Network } from "@ionic-native/network/ngx";
import { ApisService } from "src/app/services/apis.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-facts',
  templateUrl: 'facts.page.html',
  styleUrls: ['facts.page.scss'],
})
export class FactsPage implements OnInit{
  networkType;
  galImageResult;
  galImageData;
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

  ngOnInit(){
    this.authToken = localStorage.getItem('authToken');
    this.imageList();
  }

  topicClick(){
    this.navCtrl.navigateRoot(['sciencetopic']);
  }


  async openViewers(img,index) {
    const modal = await this.modalController.create({
      component: GallarypopupPage,
       componentProps: {
         src: img,
         index: index
       },
      cssClass: "gallary-modal",
      backdropDismiss:false,
      //keyboardClose: true,
      //showBackdrop: true
     
    });
    modal.onWillDismiss().then(() => {
     // this.modalController.dismiss(undefined, undefined, 'my-modal-id');
    });

    return await modal.present();
  }


  imageList() {
    this.networkType = this.network.type;
    if (this.networkType == "none") {
      this.api.connectionAlert();
    } else {
      this.api.show();
      const params = new HttpParams({
        fromObject: {
          auth_token:this.authToken,
          type:"Facts"
        },
      });
      console.log("params-11----" + params);
      this.restapiService.versesList(params).then((data) => {
        this.api.hide();
        this.galImageResult = data;
        console.log(
          "*************galImageResult" + JSON.stringify(this.galImageResult)
        );
        if (this.galImageResult.status == 200) {
          this.galImageData=this.galImageResult.gallery;
         
          console.log("galImageData-----" + this.galImageData);
          //console.log("trustedDashboardUrl-----" + this.trustedDashboardUrl);
        } else if (this.galImageResult.status == 201) {
          let message = this.galImageResult.message;
          this.api.errorToast(message);
        } else {
          let message = this.galImageResult.message;
          console.log("message-----" + message);
          this.api.errorToast(message);
        }
      });
      this.api.hide();
    }
  }


}
