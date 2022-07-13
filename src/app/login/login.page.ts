import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, ModalController, NavController } from '@ionic/angular';
import { HttpClient,HttpParams} from '@angular/common/http'; 
import { RestapiserviceService } from '../restapiservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  registerResult;
  deviceToken;
  constructor(private navCtrl: NavController,public http: HttpClient,public restapiService: RestapiserviceService,) { }

  ngOnInit() {
    this.deviceToken = localStorage.getItem('fcm');
  }


  // onLogin(){
  //   this.navCtrl.navigateRoot(['tabs/tab1']);
  // }

  register() {
    this.navCtrl.navigateRoot(['register']);
  }

  forgotPass(){
    this.navCtrl.navigateRoot(['forgotpassword']);
  }


  onLogin(){
    //this.presentLoading();
    //this.submitted = true;
        const params = new HttpParams({
          fromObject: {
            mobile_number:"9354965461",
          }
          }); 
        this.restapiService.sendOTP(params).then(data => {
        //this.dismissLoading();
         this.registerResult = data;
         console.log("*************LoginForm"+JSON.stringify(this.registerResult));
              if(this.registerResult.status == 200){
                this.onLoginVerify();
                //this.navCtrl.navigateRoot(['tabs/tab1']);
              }else{
                let message = this.registerResult.message;
                console.log("message-----"+message);
                //this.errorToast(message); 
              }
           })  
    //this.dismissLoading();
    }

  onLoginVerify(){
    //this.presentLoading();
    //this.submitted = true;
        const params = new HttpParams({
          fromObject: {
            mobile_number:"9354965461",
            otp:"1234",
            device_token:this.deviceToken
          }
          }); 
        this.restapiService.otpVerify(params).then(data => {
        //this.dismissLoading();
         this.registerResult = data;
         console.log("*************LoginForm"+JSON.stringify(this.registerResult));
              if(this.registerResult.status == 200){
                localStorage.setItem('verse_notify',this.registerResult.verse_notify);
                localStorage.setItem('facts_notify',this.registerResult.facts_notify);
                localStorage.setItem('explore_notify',this.registerResult.explore_notify);
                localStorage.setItem('authToken',this.registerResult.auth_token)
                //console.log("id-----"+this.registerResult.data[0].student_id);
               // this.errorToast('Login Successful');
                //this.navCtrl.navigateRoot(["/dashboard"]);
                this.navCtrl.navigateRoot(['tabs/tab1']);
              }else{
                let message = this.registerResult.message;
                console.log("message-----"+message);
                //this.errorToast(message); 
              }
           })  
    //this.dismissLoading();
    }


}
