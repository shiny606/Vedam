import { Component, OnInit } from '@angular/core';
import { ModalController , NavParams } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-savedvideopopup',
  templateUrl: './savedvideopopup.page.html',
  styleUrls: ['./savedvideopopup.page.scss'],
})
export class SavedvideopopupPage implements OnInit {
  videoUrls;
  loaded: boolean;
  trustedDashboardUrl: SafeUrl;
  constructor(public modalController: ModalController,private sanitizer: DomSanitizer,private navParam: NavParams) { }

  ngOnInit() {
    this.loaded = false;

     
    this.loaded = true;
    this.videoUrls = this.navParam.get("videoUrls");
   console.log("urlss=="+this.videoUrls)
    this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.videoUrls
    );
  }

  goDismiss(){
    this.modalController.dismiss();
  }
 

}
