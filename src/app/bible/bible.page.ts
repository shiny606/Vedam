import { Component } from '@angular/core';
import { AlertController, MenuController, ModalController, NavController } from '@ionic/angular';
import { HttpClient, HttpParams } from "@angular/common/http";
import { RestapiserviceService } from "../restapiservice.service";
import { Network } from '@ionic-native/network/ngx';
import { ApisService } from 'src/app/services/apis.service';
import { NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-bible',
  templateUrl: 'bible.page.html',
  styleUrls: ['bible.page.scss'],
})
export class BiblePage {
  seg_id = 1;
  id;
  id3;
  networkType;
  bibleResult;
  bibleBooksData;
  bibleChaptersData;
  bibleVersesData;
  bookNo;
  chapterNo;
  versesNo;
  authToken;
  constructor(private navCtrl: NavController,public api: ApisService,
    public http: HttpClient,public network: Network,
    public restapiService: RestapiserviceService) {
    this.seg_id = 1;
  }

  back(){
    this.navCtrl.navigateRoot(['tabs/tab1']);
  }

  topicClick(){
    this.navCtrl.navigateRoot(['sciencetopic']);
  }

  // bibleRead(){
  //   this.navCtrl.navigateRoot(['biblecontent']);
  // }

  onClick(val) {
    this.seg_id = val;
    if(val==1){
      
    }else if(val==2){
     
    }if(val==3){
     
    } 
  }

  bibleBookClick(bookNam){
    this.bookNo = bookNam;
    this.seg_id = 2;
    console.log('chapter=='+bookNam)
  }

  buttonChapterClicked(ChapterNum){
   
    this.chapterNo = ChapterNum;
    if(this.bookNo==""||this.bookNo==undefined){
      this.api.errorToast("Please choose one Book")
    }else{
    this.seg_id = 3;
    }
    console.log('chapter=='+ChapterNum)
  }
  buttonVersesClicked(VersesNum){
    
    this.versesNo = VersesNum;
    console.log('chapter=='+this.chapterNo)
    if(this.chapterNo==""||this.chapterNo==undefined){
      this.api.errorToast("Please choose one Chapter")
    }else{
    let navigationExtras: NavigationExtras = {
      queryParams: {
        BookName:this.bookNo,
        ChapterName:this.chapterNo,  
        VersesName: this.versesNo,  
      }
  };
  this.navCtrl.navigateRoot(["biblecontent"],navigationExtras);
}
  }


  ngOnInit() {
    this.authToken = localStorage.getItem('authToken');
   this.bibleTopicList();
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
        this.bibleBooksData = this.bibleResult.books;
        this.bibleChaptersData = this.bibleResult.chapters;
        this.bibleVersesData = this.bibleResult.verses;
        console.log("bibleBooksData-----" + this.bibleResult);
        console.log("bibleChaptersData-----" + this.bibleChaptersData);
        console.log("bibleVersesData-----" + this.bibleVersesData);
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
