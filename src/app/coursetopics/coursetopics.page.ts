import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, ModalController, NavController } from '@ionic/angular';
import { CoursevideopopupPage } from '../coursevideopopup/coursevideopopup.page';
import { PopupPage } from '../popup/popup.page';
import { HttpClient, HttpParams } from "@angular/common/http";
import { RestapiserviceService } from "../restapiservice.service";
import { Network } from '@ionic-native/network/ngx';
import { ApisService } from 'src/app/services/apis.service';
import { NavigationExtras } from '@angular/router';
import { ActivatedRoute, Router } from "@angular/router";
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Media,MediaObject } from '@ionic-native/media';
import { AudiopopupPage } from '../audiopopup/audiopopup.page';
@Component({
  selector: 'app-coursetopics',
  templateUrl: 'coursetopics.page.html',
  styleUrls: ['coursetopics.page.scss'],
})
export class CoursetopicsPage implements OnInit{
  seg_id = 1;
  public txtDefault: string = "Videos";
  Grade;
  Term;
  Topics;
  Id;
  networkType;
  topicResult;
  topicData=[];
  topicVideoData;
  topicPdfData;
  topicAudioData;
  topic_image;
  topicName;
  audio:MediaObject;
  authToken;
  constructor( private nativeAudio: NativeAudio,private navCtrl: NavController,public modalController: ModalController,
    public api: ApisService,
    public http: HttpClient,public network: Network,
    public restapiService: RestapiserviceService,  private route: ActivatedRoute) {
      this.route.queryParams.subscribe((params) => {
        this.Grade = params["Grade"];
        this.Term = params["Term"];
        this.Topics = params["Topics"];
        this.Id = params["Id"];
      });
      //this.nativeAudio.preloadSimple('1', 'http://www.noiseaddicts.com/samples_1w72b820/2558.mp3').then(() => console.log('success'), () => console.log('error'));
     // nativeAudio.preloadComplex('song', 'assets/song.mp3', 1, 1, 0) .then(data => { console.log(data); }, err => { console.log(err); });
    }

  back(){
    this.navCtrl.navigateRoot(['tabs/tab1']);
  }

  
  ngOnInit() {
    this.authToken = localStorage.getItem('authToken');
    this.courseDetailList();  
  }

  segmentChanged(id) {
   console.log(id);
   this.seg_id = id;
   if(id==1){
    
  }else if(id==2){
    
  }if(id==3){
    
  }
  }

  async coursevideopopup(url){
    console.log("url=sss==" + url);
    
    const modal = await this.modalController.create({
      // component: ScanuploadimgPage,
      component: CoursevideopopupPage,
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
   download(url){
    window.open(url, "_blank");
  }

  async playAudio(url){
    console.log("url=sss==" + url);
    
    const modal = await this.modalController.create({
      // component: ScanuploadimgPage,
      component: AudiopopupPage,
      cssClass: 'change-address-shipping-modal1',
      backdropDismiss:false,
      componentProps: {
        audioUrls: url,
      },
    });
    modal.onWillDismiss().then(() => {
     
    });
    modal.present();
  }

  // Audiostatus;
  // playAudio(audios){
  //     //audios = [];
  //     if(this.Audiostatus!=null&&this.Audiostatus==2)
  //     {
  //       this.audio.stop();
  //       this.audio=null;
  //     }
  //     this.audio = Media.create(audios);
  //     this.audio.play();
  //     this.audio.setVolume(1); 
  //     this.audio.onStatusUpdate.subscribe(status => 
  //       {          
  //         console.log(status)
  //         this.Audiostatus=status;
  //       });
  // }


  // ionViewWillLeave(){
  //   if(this.audio){
  //     this.audio.release();
  //   }
  // }
   courseDetailList() {
    this.networkType = this.network.type;
    if(this.networkType=='none'){
     this.api.connectionAlert();
    }else{
    this.api.show();
    const params = new HttpParams({
      fromObject: {
        auth_token: this.authToken,
        grade:this.Grade,
        term:this.Term,
        topic:this.Topics,
        id:this.Id,
      },
    });
    console.log("params-----" + params);
    this.restapiService.courseDetails(params).then((data) => {
      this.api.hide();
      this.topicResult = data;
      console.log("*************courseDetailsResult" + JSON.stringify(this.topicResult));
      if (this.topicResult.status == 200) {
        this.topicData = this.topicResult.data;
        this.topic_image = this.topicResult.topic_image;
        this.topicName = this.topicResult.topics;
        this.topicVideoData = this.topicData[0].topic_video;
        this.topicPdfData = this.topicData[0].topic_pdf;
        this.topicAudioData = this.topicData[0].topic_audio;
        console.log("topicData-----" + this.topicData);
      } else if (this.topicResult.status == 201) {
        let message = this.topicResult.message;
        this.topicData = [];
        this.api.errorToast(message);
      } else {
        let message = this.topicResult.message;
        console.log("message-----" + message);
        this.api.errorToast(message);
        this.topicData = [];
      }
    });
    this.api.hide();
  }
 
  }

  
  }




