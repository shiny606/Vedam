import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, ModalController, NavController } from '@ionic/angular';
import { HttpClient,HttpParams} from '@angular/common/http'; 
import { RestapiserviceService } from '../restapiservice.service';
import { ApisService } from 'src/app/services/apis.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerResult;
  deviceToken;
  constructor(private navCtrl: NavController,
    public api: ApisService,public http: HttpClient,public restapiService: RestapiserviceService,) { }

  ngOnInit() {
    this.deviceToken = localStorage.getItem('fcm');
  }


  back() {
    this.navCtrl.navigateRoot(['login']);
  }

  
  onRegister(){
    //this.presentLoading();
    //this.submitted = true;
        const params = new HttpParams({
          fromObject: {
            name:'aswathi',
            email_id:'aswathi1235@gmail.com',
            mobile_number:'9354965461',
            device_token:this.deviceToken
          }
          }); 
        this.restapiService.onRegister(params).then(data => {
        //this.dismissLoading();
         this.registerResult = data;
         console.log("*************LoginForm"+JSON.stringify(this.registerResult));
              if(this.registerResult.status == 200){
                this.navCtrl.navigateRoot(['tabs/tab1']);
              }else{
                let message = this.registerResult.message;
                console.log("message-----"+message);
                this.api.errorToast(message); 
              }
           })  
    //this.dismissLoading();
    }

}
