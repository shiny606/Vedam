
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
 
  constructor(
    private router: Router,
    private navCtrl: NavController,
  ) {

  }

  ngOnInit() {
   
  }

  savedClick(){
    this.navCtrl.navigateRoot(['saved']);
  }
  contactusClick(){
    this.navCtrl.navigateRoot(['contactus']); 
  }
  aboutusClick(){
    this.navCtrl.navigateRoot(['aboutus']); 
  }
  notificationClick(){
    this.navCtrl.navigateRoot(['notification']); 
  }
  profileClick(){
    this.navCtrl.navigateRoot(['profile']); 
  }
  verseClick(){
    this.navCtrl.navigateRoot(['verse']); 
  }
  dailyFactsClick(){
    this.navCtrl.navigateRoot(['facts']); 
  }
 
}


 

 


