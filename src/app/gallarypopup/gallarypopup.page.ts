import { Component, OnInit, ViewChild, Input } from "@angular/core";
import {
  AlertController,
  MenuController,
  ModalController,
  NavController,
  IonSlides,
  NavParams,
} from "@ionic/angular";
import { HttpClient, HttpParams } from "@angular/common/http";
import { RestapiserviceService } from "../restapiservice.service";
import { Network } from "@ionic-native/network/ngx";
import { ApisService } from "src/app/services/apis.service";
import { NavigationExtras } from "@angular/router";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-gallarypopup",
  templateUrl: "gallarypopup.page.html",
  styleUrls: ["gallarypopup.page.scss"],
})
export class GallarypopupPage implements OnInit {
  
  //@Input('img')img: any;
  img=[];
  gal=[];
  index;
  
  galImageResult;
  galImageData;
  networkType;
  sliderOpts;
  constructor(
    private navCtrl: NavController,
    private navParam: NavParams,
    public modalController: ModalController,
    public api: ApisService,
    public http: HttpClient,
    public network: Network,
    public restapiService: RestapiserviceService,
    private route: ActivatedRoute
  ) {
   
  }

  ngOnInit() {
    this.img = this.navParam.get("src");
    this.index = this.navParam.get("index");
    this.sliderOpts = {
      zoom: true,
      initialSlide:this.index
    };
   // this.img = this.img[this.index].data;
  }

  

    
  closeClick() {
    this.modalController.dismiss();
  }

}
