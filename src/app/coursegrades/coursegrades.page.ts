import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, ModalController, NavController } from '@ionic/angular';
import { HttpClient, HttpParams } from "@angular/common/http";
import { RestapiserviceService } from "../restapiservice.service";
import { Network } from '@ionic-native/network/ngx';
import { ApisService } from 'src/app/services/apis.service';
import { NavigationExtras } from '@angular/router';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-coursegrades',
  templateUrl: 'coursegrades.page.html',
  styleUrls: ['coursegrades.page.scss'],
})
export class CoursegradesPage implements OnInit{
networkType;
Grade;
gradeResult;
gradeData;
gradeImage;
gradeName;
authToken;
constructor(private navCtrl: NavController,public api: ApisService,
    public http: HttpClient,public network: Network,
    public restapiService: RestapiserviceService,  private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.Grade = params["Grade"];
    });
  }

  back(){
    this.navCtrl.navigateRoot(['tabs/tab1']);
  }

  
  ngOnInit() {
    this.authToken = localStorage.getItem('authToken');
    this.courseGradetList();  
  }

  courseGradeClick(grade,term){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        Grade:grade, 
        Term:term,
      }
  };
  this.navCtrl.navigateRoot(["courseterms"],navigationExtras);
  }

  courseGradetList() {
    this.networkType = this.network.type;
    if(this.networkType=='none'){
     this.api.connectionAlert();
    }else{
    this.api.show();
    const params = new HttpParams({
      fromObject: {
        auth_token: this.authToken,
        grade:this.Grade,
      },
    });
    console.log("params-----" + params);
    this.restapiService.courseGrades(params).then((data) => {
      this.api.hide();
      this.gradeResult = data;
      console.log("*************gradeResult" + JSON.stringify(this.gradeResult));
      if (this.gradeResult.status == 200) {
        this.gradeData = this.gradeResult.terms;
        this.gradeImage = this.gradeResult.cover_image;
        this.gradeName = this.gradeResult.grade_name;
        console.log("bibleContentData-----" + this.gradeData);
      } else if (this.gradeResult.status == 201) {
        let message = this.gradeResult.message;
        this.gradeData = [];
        this.api.errorToast(message);
      } else {
        let message = this.gradeResult.message;
        console.log("message-----" + message);
        this.api.errorToast(message);
        this.gradeData = [];
      }
    });
    this.api.hide();
  }
 
  }


}
