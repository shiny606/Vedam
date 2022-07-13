import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { NgOtpInputModule } from  'ng-otp-input';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
import { Network } from '@ionic-native/network/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { File } from '@ionic-native/file/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
@NgModule({
  declarations: [AppComponent],
  imports: [NgxIonicImageViewerModule,HttpClientModule,NgOtpInputModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SocialSharing,StatusBar,Network,NativeAudio,FirebaseX, File,  Camera,HTTP,AppVersion
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
