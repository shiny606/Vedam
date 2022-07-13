import { Component, OnInit } from "@angular/core";
import { ModalController, NavParams } from "@ionic/angular";
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl,
} from "@angular/platform-browser";
import { HttpClient, HttpParams } from "@angular/common/http";
import { RestapiserviceService } from "../restapiservice.service";
import { Network } from "@ionic-native/network/ngx";
import { ApisService } from "src/app/services/apis.service";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-videopopup",
  templateUrl: "./videopopup.page.html",
  styleUrls: ["./videopopup.page.scss"],
})
export class VideopopupPage implements OnInit {
  videoList = [];
  videoTitle;
  videoUrl;
  loaded: boolean;
  trustedDashboardUrl: SafeUrl;
  networkType;
  cateTopicResult;
  cateTopicData;
  Topic = "";
  TopicName = "";
  videoUrlLink;
  videoUrls = "";
  TopicNames = "";
  BookMarkResult;
  image;
  authToken;
  constructor(
    public modalController: ModalController,
    private sanitizer: DomSanitizer,
    public api: ApisService,
    public http: HttpClient,
    public network: Network,
    public restapiService: RestapiserviceService,
    private route: ActivatedRoute,
    private navParam: NavParams
  ) {
    this.loaded = false;
  }

  ngOnInit() {
    this.authToken = localStorage.getItem('authToken');
    this.loaded = true;
    this.videoUrls = this.navParam.get("videoUrls");
    this.Topic = this.navParam.get("Topic");
    this.TopicNames = this.navParam.get("Names");
    this.image = this.navParam.get("image");
    console.log('topic==='+this.Topic)
    this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.videoUrls
    );
  }
  goDismiss() {
    this.modalController.dismiss();
  }

  
  bookMarkClick() {
    this.networkType = this.network.type;
    if(this.networkType=='none'){
     this.api.connectionAlert();
    }else{
    this.api.show();
    const params = new HttpParams({
      fromObject: {
        auth_token: this.authToken,
        type: "Explore",
        data:this.image,
      },
    });
    console.log("*************params" + params);
    this.restapiService.bookmark(params).then((data) => {
      this.api.hide();
      this.BookMarkResult = data;
      console.log("*************BookMarkForm" + JSON.stringify(this.BookMarkResult));
      if (this.BookMarkResult.status == 200) {
        this.api.errorToast("Bookmarked Successfully")
       // this.verseData = this.verseResult.data;
       // console.log("verseData-----" + this.verseData);
      } else if (this.BookMarkResult.status == 201) {
        let message = this.BookMarkResult.message;
      } else {
        let message = this.BookMarkResult.message;
        console.log("message-----" + message);
      }
    });
    this.api.hide();
  }
  }

}
