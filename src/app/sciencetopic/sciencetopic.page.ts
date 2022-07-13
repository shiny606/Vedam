import { Component, OnInit } from "@angular/core";
import {
  AlertController,
  MenuController,
  ModalController,
  NavController,
} from "@ionic/angular";
import { VideopopupPage } from "../videopopup/videopopup.page";
import { HttpClient, HttpParams } from "@angular/common/http";
import { RestapiserviceService } from "../restapiservice.service";
import { Network } from "@ionic-native/network/ngx";
import { ApisService } from "src/app/services/apis.service";
import { ActivatedRoute, Router } from "@angular/router";
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl,
} from "@angular/platform-browser";
@Component({
  selector: "app-sciencetopic",
  templateUrl: "sciencetopic.page.html",
  styleUrls: ["sciencetopic.page.scss"],
})
export class SciencetopicPage implements OnInit {
  trustedDashboardUrl: SafeUrl;
  networkType;
  cateTopicResult;
  cateTopicData;
  categoryTopic = "";
  cateTopicName = "";
  topicVideo;
  topic_video_banner_image;
  authToken;
  constructor(
    private navCtrl: NavController,
    private sanitizer: DomSanitizer,
    public modalController: ModalController,
    public api: ApisService,
    public http: HttpClient,
    public network: Network,
    public restapiService: RestapiserviceService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      this.categoryTopic = params["categoryTopic"];
      this.cateTopicName = params["cateTopicName"];
      this.authToken = localStorage.getItem('authToken');
    this.cateTopicDetail();
    });
  }

  ngOnInit() {
    this.authToken = localStorage.getItem('authToken');
    this.cateTopicDetail();
  }

  back() {
    this.navCtrl.navigateRoot(["tabs/tab1"]);
  }

  async videopopup(videoUrl,videoImg) {
    console.log("videoUrl=sss==" + videoUrl);
    const modal = await this.modalController.create({
      // component: ScanuploadimgPage,
      component: VideopopupPage,
      componentProps: {
        videoUrls: videoUrl,
        Topic: this.categoryTopic,
        Names: this.cateTopicName,
        image: videoImg,
      },
      cssClass: "video-modal",
      backdropDismiss: false,
    });
    modal.onWillDismiss().then(() => {});
    modal.present();
  }

  cateTopicDetail() {
    this.networkType = this.network.type;
    if (this.networkType == "none") {
      this.api.connectionAlert();
    } else {
      this.api.show();
      const params = new HttpParams({
        fromObject: {
          auth_token: this.authToken,
          category: this.categoryTopic,
          topic: this.cateTopicName,
        },
      });
      console.log("params-11----" + params);
      this.restapiService.exploreTopic(params).then((data) => {
        this.api.hide();
        this.cateTopicResult = data;
        console.log(
          "*************explorecategory" + JSON.stringify(this.cateTopicResult)
        );
        if (this.cateTopicResult.status == 200) {
          this.cateTopicData =
            this.cateTopicResult.explore_topics[0].topic_video;
          this.topic_video_banner_image =
            this.cateTopicResult.explore_topics[0].topic_video_banner_image;
          // this.trustedDashboardUrl =
          //     this.sanitizer.bypassSecurityTrustResourceUrl
          //        (this.cateTopicData);
          //this.cateTopicData = this.cateTopicResult.explore_topics;
          //this.topicVideo = this.cateTopicData.topic_video;
          console.log("explorecategoryData-----" + this.cateTopicData);
          //console.log("trustedDashboardUrl-----" + this.trustedDashboardUrl);
        } else if (this.cateTopicResult.status == 201) {
          let message = this.cateTopicResult.message;
          this.api.errorToast(message);
        } else {
          let message = this.cateTopicResult.message;
          console.log("message-----" + message);
          this.api.errorToast(message);
        }
      });
      this.api.hide();
    }
  }
}
