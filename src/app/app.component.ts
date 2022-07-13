import { Component } from '@angular/core';
import { Platform, ModalController,ActionSheetController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from "@ionic/angular";
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import {AppVersion} from '@ionic-native/app-version/ngx';
import { ApisService } from "src/app/services/apis.service";
import { HttpClient,HttpParams} from '@angular/common/http'; 
import { RestapiserviceService } from "src/app/restapiservice.service";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  protected app_version: string;
  registerResult;
  regData;
  versions;
  constructor(public http: HttpClient,public restapiService: RestapiserviceService,public api: ApisService,private platform: Platform,private navCtrl: NavController,  public modalController: ModalController,
    private router: Router,private alertCtrl: AlertController,private appVersion: AppVersion,
    private statusBar: StatusBar,private firebaseX: FirebaseX,) {}

  async ngOnInit() {  
      
    this.initializeApp();
  }


  async initializeApp() {
    console.log('initializeApp==11==')  
    const isModalOpened = await this.modalController.getTop();
    this.platform.ready().then(() => {
      console.log('initializeApp==23==')  

      this.appVersion.getVersionNumber().then(
				(versionNumber) => {
					this.app_version = versionNumber;
				},
				(error) => {
					console.log(error);
				});

       
        this.restapiService.curVersion().then(data => {
        //this.dismissLoading();
         this.registerResult = data;
         console.log("*************curVersion"+JSON.stringify(this.registerResult));
              if(this.registerResult.status == 200){
                this.regData = this.registerResult.current_version;
                this.versions = this.regData.version; 
                console.log("this.versions-----"+this.versions);
                console.log("app_version--11---"+this.app_version);
                //this.versionLink = this.registerResult.current_version[0].link;
                if(this.app_version != this.versions ){
                  console.log("app_version-----"+this.app_version);
                  //this.updateAlert(this.versionLink);
                }
              }else{
                let message = this.registerResult.message;
                console.log("message-----"+message);
                this.api.errorToast(message); 
              }
           })
      this.firebaseX.getToken()
    .then(
      token =>
      {   
      console.log('fcmmmm===='+token)     
      localStorage.setItem('fcm',token);
      }
      )      
    .catch(error => console.error('Error getting token', error));
  this.firebaseX.onMessageReceived()
    .subscribe(data =>{        
      console.log('datanoti======'+JSON.stringify(data)) 
      console.log('data==page_title======'+data.page_title) 
      if(data.page_title == 'Course') {  
        console.log('grade==='+data.grade)
        console.log('term==='+data.term)
        this.navCtrl.navigateRoot(["/courseterms"], {
          queryParams: {
            Grade:data.grade, 
            Term:data.term,
          },
        });
      }else if(data.page_title == 'Explore') {  
        this.navCtrl.navigateRoot(["/sciencetopic"], {
          queryParams: {
            categoryTopic: data.category,
            cateTopicName: data.topic,     
          },
        });
      }else{
        this.navCtrl.navigateRoot(["/home"]);
      }
    });
    
       


 
this.firebaseX.onTokenRefresh()
.subscribe((token: string) => {
  console.log('fcmmmm==11=='+token)    
localStorage.setItem('fcm',token);  
});

this.platform.backButton.subscribe((): void => {
  console.log("this.router.url===>" + this.router.url);
  
if (this.router.url == "/register") {
    this.navCtrl.navigateBack(["/login"]);
    console.log("register");
    return;
  } 
  else if (this.router.url=="/login") {
    this.exitAlert();
    console.log("login");
    return;
  } 
  else if (this.router.url == "/forgotpassword") {
    this.navCtrl.navigateBack(["/login"]);
    console.log("forgotpassword");
    return;
  } 
  else if (this.router.url == "/otp") {
    this.navCtrl.navigateBack(["/forgotpassword"]);
    console.log("otp");
    return;
  } 
  else if (this.router.url == "/resetpassword?") {
    this.navCtrl.navigateBack(["/login"]);
    console.log("resetpassword");
    return;
  } 
  else if (this.router.url == "/tabs/tab1") {
    navigator["app"].exitApp();
    console.log("tabs/tab1");
    return;
  } 
  else if (this.router.url == "/tabs/tab2") {
    this.navCtrl.navigateBack(["/tabs/tab1"]);
    console.log("tabs/tab2");
    return;
  } 
  else if (this.router.url == "/tabs/tab3") {
    this.navCtrl.navigateBack(["/tabs/tab1"]);
    console.log("tabs/tab3");
    return;
  } 
  else if (this.router.url == "/tabs/tab4") {
    this.navCtrl.navigateBack(["/tabs/tab1"]);
    console.log("tabs/tab4");
    return;
  } 
  else if (this.router.url == "/tabs/tab5") {
    this.navCtrl.navigateBack(["/tabs/tab1"]);
    console.log("tabs/tab5");
    return;
  } 
  else if (this.router.url == "/biblecontent") {
    this.navCtrl.navigateBack(["/tabs/tab2"]);
    console.log("biblecontent");
    return;
  } 
  else if (this.router.url == "/science") {
    this.navCtrl.navigateBack(["/tabs/tab1"]);
    console.log("science");
    return;
  }  else if (this.router.url == "/debate") {
    this.navCtrl.navigateBack(["/tabs/tab1"]);
    console.log("debate");
    return;
  }  else if (this.router.url == "/spritual") {
    this.navCtrl.navigateBack(["/tabs/tab1"]);
    console.log("spritual");
    return;
  }  else if (this.router.url == "/social") {
    this.navCtrl.navigateBack(["/tabs/tab1"]);
    console.log("social");
    return;
  }  else if (this.router.url == "/current") {
    this.navCtrl.navigateBack(["/tabs/tab1"]);
    console.log("current");
    return;
  }  else if (this.router.url == "/sciencetopic") {
    this.navCtrl.navigateBack(["/tabs/tab1"]);
    console.log("sciencetopic");
    return;
  }  else if (this.router.url == "/coursegrades") {
    this.navCtrl.navigateBack(["/tabs/tab1"]);
    console.log("coursegrades");
    return;
  } else if (this.router.url == "/courseterms") {
    this.navCtrl.navigateBack(["/tabs/tab1"]);
    console.log("courseterms");
    return;
  } else if (this.router.url == "/coursetopics") {
    this.navCtrl.navigateBack(["/tabs/tab1"]);
    console.log("coursetopics");
    return;
  }
  else if (this.router.url == "/saved") {
    this.modalController.dismiss();
    this.navCtrl.navigateBack(["/tabs/tab5"]);
    console.log("saved");
    return;
  }
  else if (this.router.url == "/contactus") {
    this.navCtrl.navigateBack(["/tabs/tab5"]);
    console.log("contactus");
    return;
  }
  else if (this.router.url == "/aboutus") {
    this.navCtrl.navigateBack(["/tabs/tab5"]);
    console.log("aboutus");
    return;
  }
  else if (this.router.url == "/notification") {
    this.navCtrl.navigateBack(["/tabs/tab5"]);
    console.log("notification");
    return;
  }
  else if (this.router.url == "/profile") {
    this.navCtrl.navigateBack(["/tabs/tab5"]);
    console.log("profile");
    return;
  }
  // else if (this.router.url == "/gallaryversepopup" && isModalOpened) {
    
  //   console.log("verse modal");
  //   this.navCtrl.navigateBack(["/tabs/tab5"]);
  //   this.modalController.dismiss();
  //   return;
  // }
  else if (this.router.url == "/verse") {
    console.log("verse");
    this.navCtrl.navigateBack(["/tabs/tab5"]);
    if(this.router.url == "/verse" && isModalOpened){
    this.modalController.dismiss();
    console.log("verse modal");
    this.navCtrl.navigateBack(["/tabs/tab5"]);
    return;
    }
    return;
  }
  else if (this.router.url == "/facts") {
    if(this.modalController != null){
    this.modalController.dismiss();
    console.log("facts modal");
    this.navCtrl.navigateBack(["/tabs/tab5"]);
    return;
  }else{
    this.navCtrl.navigateBack(["/tabs/tab5"]);
    console.log("facts");
    return;
  }
  }
});




    });



} 
 

  
 async exitAlert() {
    const alert = await this.alertCtrl.create({
      header: "Alert",
      message: "Are you sure want to exit the app?",
      buttons: [
        {
          text: "YES",
          handler: (blah) => {
            console.log("EXIT APP");
            navigator["app"].exitApp();
          },
        },
        {
          text: "NO",
          role: "cancel",
        },
      ],
    });

    await alert.present();
  }

}
