import { Component ,OnInit} from '@angular/core';
import { AlertController, MenuController, ModalController, NavController } from '@ionic/angular';
import { HttpClient, HttpParams } from "@angular/common/http";
import { RestapiserviceService } from "../restapiservice.service";
import { Network } from '@ionic-native/network/ngx';
import { ApisService } from 'src/app/services/apis.service';
import { NavigationExtras } from '@angular/router';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-biblecontent',
  templateUrl: 'biblecontent.page.html',
  styleUrls: ['biblecontent.page.scss'],
})
export class BiblecontentPage implements OnInit{
  details: any[] = [];
  versions: any[] = [];
  bibleContentResult;
  bibleContentData = [];
  //public nameValue: string = 'John'
  public versionsValue: string;
  networkType;
  BookName;
  ChapterName;
  VersesName;
  bibleResult;
  bibleversionData;
  authToken;
  constructor(private navCtrl: NavController,public api: ApisService,
    public http: HttpClient,public network: Network,
    public restapiService: RestapiserviceService,  private route: ActivatedRoute) {
      this.route.queryParams.subscribe((params) => {
        this.BookName = params["BookName"];
        this.ChapterName =params["ChapterName"];
        this.VersesName = params["VersesName"];
      });
     
  }

  
  ngOnInit() {
    this.authToken = localStorage.getItem('authToken');
    this.bibleTopicList();  
  }
 
  bookNameClick(){
    this.navCtrl.navigateRoot(['tabs/tab2']); 
  }

  versionChange(verName){
    this.versionsValue = verName;
    this.bibleContentList();
  }
  bibleContentList() {
    this.networkType = this.network.type;
    if(this.networkType=='none'){
     this.api.connectionAlert();
    }else{
    this.api.show();
    const params = new HttpParams({
      fromObject: {
        auth_token: this.authToken,
        books:this.BookName,
        chapters:this.ChapterName,
        verses_no:this.VersesName,
        bible_type:this.versionsValue,
      },
    });
    console.log("bibleparams-----" + params);
    this.restapiService.bibleContents(params).then((data) => {
      this.api.hide();
      this.bibleContentResult = data;
      console.log("*************bibleContentResult" + JSON.stringify(this.bibleContentResult));
      if (this.bibleContentResult.status == 200) {
        this.bibleContentData = this.bibleContentResult.data;
        console.log("bibleContentData-----" + this.bibleContentData);
      } else if (this.bibleContentResult.status == 201) {
        let message = this.bibleContentResult.message;
        this.bibleContentData = [];
        this.api.errorToast(message);
      } else {
        let message = this.bibleContentResult.message;
        console.log("message-----" + message);
        this.api.errorToast(message);
        this.bibleContentData = [];
      }
    });
    this.api.hide();
  }
 
  }


  bibleTopicList() {
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
    this.restapiService.bibleTopics(params).then((data) => {
      this.api.hide();
      this.bibleResult = data;
      console.log("*************bibleResult" + JSON.stringify(this.bibleResult));
      if (this.bibleResult.status == 200) {
        this.bibleversionData = this.bibleResult.version;
        this.versionsValue = this.bibleResult.version[0].bible_type;
        this.bibleContentList();
        console.log("bibleversionData-----" + this.bibleversionData);
      } else if (this.bibleResult.status == 201) {
        let message = this.bibleResult.message;
        this.api.errorToast(message);
      } else {
        let message = this.bibleResult.message;
        console.log("message-----" + message);
        this.api.errorToast(message);
      }
    });
    this.api.hide();
  }
 
  }


  

}
