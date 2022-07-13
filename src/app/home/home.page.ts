import { Component, OnInit } from "@angular/core";
import {
  AlertController,
  MenuController,
  ModalController,
  NavController,
} from "@ionic/angular";
import { HttpClient, HttpParams } from "@angular/common/http";
import { RestapiserviceService } from "../restapiservice.service";
import { Network } from '@ionic-native/network/ngx';
import { ApisService } from 'src/app/services/apis.service';
import { NavigationExtras } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { File } from '@ionic-native/file/ngx';
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  verseResult;
  BookMarkResult;
  FactsResult;
  factsData = [];
  verseData = [];
  exploreResult;
  exploreData;
  networkType;
  courseResult;
  //courseeData= [];
  courseeData;
  coursImage = [];
  count: number = 0;
  click;
  language = "Tamil";
  authToken;
  slideOptions = {
    effect: "coverflow",
    initialSlide: 1,
    speed: 400,
    slidesPerView: 1.4,
    spaceBetween: 0,
    centeredSlides: true,
    height: "250px",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 400,
      modifier: 1,
      slideShadows: true,
    },
    on: {
      beforeInit() {
        const swiper = this;

        swiper.classNames.push(
          `${swiper.params.containerModifierClass}coverflow`
        );
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);

        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      setTranslate() {
        const swiper = this;
        const {
          width: swiperWidth,
          height: swiperHeight,
          slides,
          $wrapperEl,
          slidesSizesGrid,
          $,
        } = swiper;
        const params = swiper.params.coverflowEffect;
        const isHorizontal = swiper.isHorizontal();
        const transform$$1 = swiper.translate;
        const center = isHorizontal
          ? -transform$$1 + swiperWidth / 2
          : -transform$$1 + swiperHeight / 2;
        const rotate = isHorizontal ? params.rotate : -params.rotate;
        const translate = params.depth;
        // Each slide offset from center
        for (let i = 0, length = slides.length; i < length; i += 1) {
          const $slideEl = slides.eq(i);
          const slideSize = slidesSizesGrid[i];
          const slideOffset = $slideEl[0].swiperSlideOffset;
          const offsetMultiplier =
            ((center - slideOffset - slideSize / 2) / slideSize) *
            params.modifier;

          let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
          let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
          // var rotateZ = 0
          let translateZ = -translate * Math.abs(offsetMultiplier);

          let translateY = isHorizontal ? 0 : params.stretch * offsetMultiplier;
          let translateX = isHorizontal ? params.stretch * offsetMultiplier : 0;

          // Fix for ultra small values
          if (Math.abs(translateX) < 0.001) translateX = 0;
          if (Math.abs(translateY) < 0.001) translateY = 0;
          if (Math.abs(translateZ) < 0.001) translateZ = 0;
          if (Math.abs(rotateY) < 0.001) rotateY = 0;
          if (Math.abs(rotateX) < 0.001) rotateX = 0;

          const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

          $slideEl.transform(slideTransform);
          $slideEl[0].style.zIndex =
            -Math.abs(Math.round(offsetMultiplier)) + 1;
          if (params.slideShadows) {
            // Set shadows
            let $shadowBeforeEl = isHorizontal
              ? $slideEl.find(".swiper-slide-shadow-left")
              : $slideEl.find(".swiper-slide-shadow-top");
            let $shadowAfterEl = isHorizontal
              ? $slideEl.find(".swiper-slide-shadow-right")
              : $slideEl.find(".swiper-slide-shadow-bottom");
            if ($shadowBeforeEl.length === 0) {
              $shadowBeforeEl = swiper.$(
                `<div class="swiper-slide-shadow-${
                  isHorizontal ? "left" : "top"
                }"></div>`
              );
              $slideEl.append($shadowBeforeEl);
            }
            if ($shadowAfterEl.length === 0) {
              $shadowAfterEl = swiper.$(
                `<div class="swiper-slide-shadow-${
                  isHorizontal ? "right" : "bottom"
                }"></div>`
              );
              $slideEl.append($shadowAfterEl);
            }
            if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = 0;
            if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = 0;
          }
        }

        // Set correct perspective for IE10
        if (
          swiper.support.pointerEvents ||
          swiper.support.prefixedPointerEvents
        ) {
          const ws = $wrapperEl[0].style;
          ws.perspectiveOrigin = `${center}px 50%`;
        }
      },
      setTransition(duration) {
        const swiper = this;
        swiper.slides
          .transition(duration)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(duration);
      },
    },
  };

  constructor(
    private navCtrl: NavController,public api: ApisService,
    private nativeHTTP: HTTP, private file: File,
    public http: HttpClient,public network: Network,
    public restapiService: RestapiserviceService,public socialSharing: SocialSharing,
  ) {}

  ngOnInit() {
    this.authToken = localStorage.getItem('authToken');
    this.courseList();
    this.dailyVerses();
    this.dailyFacts();
    this.exploreList();
    
    //this.getRestaurants(this.discover_category[0].discover_category);
  }

  ScienceClick(cateName) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        category: cateName,       
      }
  };
  this.navCtrl.navigateRoot(["science"],navigationExtras);
  }
  // DebateClick() {
  //   this.navCtrl.navigateRoot(["debate"]);
  // }
  // SpritualClick() {
  //   this.navCtrl.navigateRoot(["spritual"]);
  // }
  // SocialClick() {
  //   this.navCtrl.navigateRoot(["social"]);
  // }
  // CurrentClick() {
  //   this.navCtrl.navigateRoot(["current"]);
  // }

  courseClick(grade) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        Grade:grade, 
      }
  };
  this.navCtrl.navigateRoot(["coursegrades"],navigationExtras);
  }

  langChange(click){
    this.click = !click;
    if(this.click){
    this.count++;
    }else{
    this.count--;
    }
    this.lang();
    }

  lang(){
    if(this.count==0){
      this.language = "Tamil";
    }else{
      this.language = "English";
    }
    this.dailyVerses();
    this.dailyFacts();
  }

  dailyVerses() {
    this.networkType = this.network.type;
    if(this.networkType=='none'){
     this.api.connectionAlert();
    }else{
    this.api.show();
    const params = new HttpParams({
      fromObject: {
        auth_token: this.authToken,
        type: this.language,
      },
    });
    this.restapiService.dailyVerses(params).then((data) => {
      this.api.hide();
      this.verseResult = data;
      console.log("*************LoginForm" + JSON.stringify(this.verseResult));
      if (this.verseResult.status == 200) {
        this.verseData = this.verseResult.data;
        console.log("verseData-----" + this.verseData);
      } else if (this.verseResult.status == 201) {
        let message = this.verseResult.message;
      } else {
        let message = this.verseResult.message;
        console.log("message-----" + message);
      }
    });
    this.api.hide();
  }
  }

  shareImag(ImgLink){
    this.socialSharing.share("Check this item:"+ImgLink)
    .then(() => {
    })
    .catch(() => {
    });
  }

downloadImg(){


}

  bookMarkClick(typeName,imgName) {
    this.networkType = this.network.type;
    if(this.networkType=='none'){
     this.api.connectionAlert();
    }else{
    this.api.show();
    const params = new HttpParams({
      fromObject: {
        auth_token: this.authToken,
        type: typeName,
        data:imgName,
      },
    });
    console.log("*************params" + params);
    this.restapiService.bookmark(params).then((data) => {
      this.api.hide();
      this.BookMarkResult = data;
      console.log("*************BookMarkForm" + JSON.stringify(this.BookMarkResult));
      if (this.BookMarkResult.status == 200) {
        this.api.errorToast("Bookmarked Successfully")
       // this.verseData = this.verseResult.data;
       // console.log("verseData-----" + this.verseData);
      } else if (this.BookMarkResult.status == 201) {
        let message = this.BookMarkResult.message;
      } else {
        let message = this.BookMarkResult.message;
        console.log("message-----" + message);
      }
    });
    this.api.hide();
  }
  }

  dailyFacts() {
    this.networkType = this.network.type;
    if(this.networkType=='none'){
     this.api.connectionAlert();
    }else{
    this.api.show();
    const params = new HttpParams({
      fromObject: {
        auth_token: this.authToken,
        type: this.language,
      },
    });
    this.restapiService.dailyFacts(params).then((data) => {
      this.api.hide();
      this.FactsResult = data;
      console.log("*************LoginForm" + JSON.stringify(this.FactsResult));
      if (this.FactsResult.status == 200) {
        this.factsData = this.FactsResult.data;
        console.log("verseData-----" + this.FactsResult);
      } else if (this.FactsResult.status == 201) {
        let message = this.FactsResult.message;
        //this.api.errorToast(message);
      } else {
        let message = this.FactsResult.message;
        console.log("message-----" + message);
       // this.api.errorToast(message);
      }
    });
    this.api.hide();
  }
  }

  dateTime;
  async DownloadImage(url,imgName)
  {
   // const response = await fetch(url);
   console.log('url block...', url);
   var fileExtension = url.substr(url.lastIndexOf('/') + 1);
   this.dateTime = Math.floor((Math.random() * 10000000000) + 1);
   //var filename = url.split("/").pop();
   const filename='img_'+ this.dateTime+'.jpg';
   const filePath =  this.file.externalRootDirectory +'Download/'; 
   const filePath1 =  this.file.externalRootDirectory +'Download/'+fileExtension; 
   //const filePath =  this.file.dataDirectory + 'downloadsImg/'; 
                         // for iOS use this.file.documentsDirectory
                         console.log('url filePath...', filePath);
                         this.file.createFile(filePath,fileExtension,true);
        this.nativeHTTP.downloadFile(url, {}, {}, filePath1).then(response => {
           // prints 200
           console.log('success block...', response);
        }).catch(err => {
            // prints 403
            console.log('error block ... ', err.status);
            // prints Permission denied
            console.log('error block ... ', err.error);
        })

      
    
  }



  exploreList() {
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
    this.restapiService.exploreList(params).then((data) => {
      this.api.hide();
      this.exploreResult = data;
      console.log("*************exploreList" + JSON.stringify(this.exploreResult));
      if (this.exploreResult.status == 200) {
        this.exploreData = this.exploreResult.explore_category;
        console.log("exploreData-----" + this.exploreResult);
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
  courseList() {
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
    this.restapiService.coursesList(params).then((data) => {
      this.api.hide();
      this.courseResult = data;
      console.log("*************coursesList" + JSON.stringify(this.courseResult));
      if (this.courseResult.status == 200) {
        this.courseeData = this.courseResult.grades;
        // for(var i in this.courseResult) { 
        //   var items = this.courseResult[i];  
        // } 

        // this.coursImage=items;
         //console.log("coursImage-----" +  this.coursImage.length);
      } else if (this.courseResult.status == 201) {
        let message = this.courseResult.message;
        this.api.errorToast(message);
      } else {
        let message = this.courseResult.message;
        console.log("message-----" + message);
        this.api.errorToast(message);
        //this.courseeData=[];
      }
    });
    this.api.hide();
  }
 
  }
}
