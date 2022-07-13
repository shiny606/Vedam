import { Component, OnInit } from '@angular/core';
import { ModalController , NavParams } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-coursevideopopup',
  templateUrl: './coursevideopopup.page.html',
  styleUrls: ['./coursevideopopup.page.scss'],
})
export class CoursevideopopupPage implements OnInit {
  videoUrls;
  loaded: boolean;
  trustedDashboardUrl: SafeUrl;
  constructor(public modalController: ModalController,private sanitizer: DomSanitizer,private navParam: NavParams) { }

  ngOnInit() {
    this.loaded = false;

     
    this.loaded = true;
    this.videoUrls = this.navParam.get("videoUrls");
   
    this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.videoUrls
    );
  }

  goDismiss(){
    this.modalController.dismiss();
  }
 

}
