import { Component ,OnInit} from '@angular/core';
import { AlertController, MenuController, ModalController, NavController } from '@ionic/angular';
import { HttpClient, HttpParams } from "@angular/common/http";
import { RestapiserviceService } from "../restapiservice.service";
import { Network } from '@ionic-native/network/ngx';
import { ApisService } from 'src/app/services/apis.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-science',
  templateUrl: 'science.page.html',
  styleUrls: ['science.page.scss'],
})
export class SciencePage implements OnInit{
  networkType;
  exploreResult;
  exploreData;
  category;
  authToken;
  constructor(private navCtrl: NavController,public api: ApisService,
    public http: HttpClient,public network: Network,
    public restapiService: RestapiserviceService, private route: ActivatedRoute,) {
      this.route.queryParams.subscribe(params => { 
        this.category = params["category"];
        });
    }


    ngOnInit() {
      this.authToken = localStorage.getItem('authToken');
      this.cateTopic(this.category);
     
    }

  back(){
    this.navCtrl.navigateRoot(['tabs/tab1']);
  }

  topicClick(topicName){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        categoryTopic: this.category,
        cateTopicName: topicName,      
      }
  };
  this.navCtrl.navigateRoot(["sciencetopic"],navigationExtras);
  }


  cateTopic(cateNam) {
    this.networkType = this.network.type;
    if(this.networkType=='none'){
     this.api.connectionAlert();
    }else{
    this.api.show();
    const params = new HttpParams({
      fromObject: {
        auth_token: this.authToken,
        category: cateNam,
      },
    });
    console.log("params-----" + params);
    this.restapiService.explorecategory(params).then((data) => {
      this.api.hide();
      this.exploreResult = data;
      console.log("*************explorecategory" + JSON.stringify(this.exploreResult));
      if (this.exploreResult.status == 200) {
        this.exploreData = this.exploreResult.explore_topics;
        console.log("explorecategoryData-----" + this.exploreData);
        
      } else if (this.exploreResult.status == 201) {
        let message = this.exploreResult.message;
        this.api.errorToast(message);
      } else {
        let message = this.exploreResult.message;
        console.log("message-----" + message);
        this.api.errorToast(message);
      }
    });
    this.api.hide();
  }
  }



}
