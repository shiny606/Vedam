import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, ModalController, NavController ,ActionSheetController} from '@ionic/angular';
import { HttpClient, HttpParams } from "@angular/common/http";
import { RestapiserviceService } from "../restapiservice.service";
import { Network } from "@ionic-native/network/ngx";
import { ApisService } from "src/app/services/apis.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File,IWriteOptions, FileEntry} from '@ionic-native/file/ngx';
@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage implements OnInit{
  networkType;
  profileResult;
  profileData;
  pic_set;
  imgBlob;
  pic; 
  pic_captured;
  pic_hole;
  formData;
  ClickImage:Boolean;
  name;
  email;
  edit_flag: boolean;
  authToken;
  constructor(private navCtrl: NavController, public api: ApisService,private camera: Camera,private file:File, 
    public http: HttpClient,
    public network: Network,
    public restapiService: RestapiserviceService,
    private route: ActivatedRoute,public actionSheetCtrl: ActionSheetController,) {
      this.edit_flag = true;
    }

    ngOnInit(): void {
      this.authToken = localStorage.getItem('authToken');
        this.profileDetails();
    }

  back(){
    this.navCtrl.navigateRoot(['tabs/tab1']);
  }

  topicClick(){
    this.navCtrl.navigateRoot(['sciencetopic']);
  }


  profileDetails() {
    this.networkType = this.network.type;
    if (this.networkType == "none") {
      this.api.connectionAlert();
    } else {
      this.api.show();
      const params = new HttpParams({
        fromObject: {
          auth_token: this.authToken,
        },
      });
      console.log("params-Verses----" + params);
      this.restapiService.profileDetails(params).then((data) => {
        this.api.hide();
        this.profileResult = data;
       
        console.log("*************notifiResult" + JSON.stringify(this.profileResult)
        );
        if (this.profileResult.status == 200) {
          this.profileData=this.profileResult.data;
          this.pic_set = this.profileData[0].profile_image,
          this.name = this.profileData[0].name,
          this.email = this.profileData[0].email_id,
          console.log("pic_set-----" + this.pic_set);
          console.log("profileData-----" + this.profileData);
        } else if (this.profileResult.status == 201) {
          let message = this.profileResult.message;
          this.api.errorToast(message);
        } else {
          let message = this.profileResult.message;
          console.log("message-----" + message);
          this.api.errorToast(message);
        }
      });
      this.api.hide();
    }
  }


  profileUpdate() {
    this.networkType = this.network.type;
    if (this.networkType == "none") {
      this.api.connectionAlert();
    } else {
      this.api.show();
      if(this.ClickImage == false){
    this.formData = new FormData();
   
    this.formData.append('profile_image',this.imgBlob, this.pic_captured);
    this.formData.append('auth_token', this.authToken);
    this. formData.append('name',this.name);
    this.formData.append('email_id',this.email);
      }else{
        this.formData = new FormData();
   
        this.formData.append('profile_image',"");
        this.formData.append('auth_token', this.authToken);
        this. formData.append('name',this.name);
        this.formData.append('email_id',this.email);
      }
      console.log("params-Verses----" + this.formData);
      this.restapiService.profileUpdate(this.formData).then((data) => {
        this.api.hide();
        this.profileResult = data;
       
        console.log(
          "*************notifiResult" + JSON.stringify(this.profileResult)
        );
        if (this.profileResult.status == 200) {
          this.profileDetails();
          this.api.errorToast('profile updated successfully');
          this.navCtrl.navigateRoot(['tabs/tab5']);
          //this.profileData=this.profileResult.data;
          console.log("profileData-----" + this.profileData);
        } else if (this.profileResult.status == 201) {
          let message = this.profileResult.message;
          this.api.errorToast(message);
        } else {
          let message = this.profileResult.message;
          console.log("message-----" + message);
          this.api.errorToast(message);
        }
      });
      this.api.hide();
    }
  }

  editImageClick(){
    this. presentActionSheet();
  }
  async presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      header: 'Profile photo',
       buttons: [
          {
           text: 'Camera',
           role: 'destructive',
           handler: () => {
             console.log('Camera clicked');
            this.takePhotoCamera(1); 
  
           }
         },
         {
           text: 'Gallery',
           handler: () => {
             console.log('Gallery clicked');
                this.takePhoto(0); 
  
           }
         },
         {
           text: 'Cancel',
           role: 'cancel',
           handler: () => {
             console.log('Cancel clicked');
           }
         }
       ]
     });
  
     await (await actionSheet).present();
  
  }


  takePhotoCamera(sourceType:number){
    this.ClickImage=false;
    const options1: CameraOptions = {
      quality : 50,
      targetWidth: 400, 
      targetHeight: 400,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: sourceType,
      encodingType: this.camera.EncodingType.JPEG, //0 JPEG
      saveToPhotoAlbum: false,
      correctOrientation: true,
      cameraDirection: 1,//front
      allowEdit: false
    }

  this.camera.getPicture(options1).then((imageData) => {
 
   let filename = imageData.substring(imageData.lastIndexOf('/')+1);
   let path =  imageData.substring(0,imageData.lastIndexOf('/')+1);
   console.log(filename);
        this.file.readAsDataURL(path, filename).then(res=> this.pic_set = res  );
   this.file.resolveLocalFilesystemUrl(imageData).then((entry: FileEntry) => {
     entry.file(file => {
       console.log(file);
       this.pic_hole =file;  
       this.pic = file.type;
       this.pic_set= imageData;
       
       console.log("picset"+this.pic_set)
       this.pic_captured = file.name;
       const reader = new FileReader();
       reader.onload = () => {
         const formData = new FormData();
         this.imgBlob = new Blob([reader.result], {
             type: this.pic
         });
     };
     reader.readAsArrayBuffer(this.pic_hole);
     });
   });
 }, (err) => {
  console.log("error"+err)
 });

  }
  takePhoto(sourceType:number) {
    this.ClickImage=false;
   // this.ClickImage=false;
const options: CameraOptions = {
  quality : 50,
  targetWidth: 400, 
  targetHeight: 400,
  destinationType: this.camera.DestinationType.FILE_URI,
  sourceType: sourceType,
  encodingType: this.camera.EncodingType.JPEG, //0 JPEG
  saveToPhotoAlbum: false,
  correctOrientation: true,
  cameraDirection: 1,//front
  allowEdit: false
}
 this.camera.getPicture(options).then((imageData1) => {

  let filename = imageData1.substring(imageData1.lastIndexOf('/')+1);
  let path =  imageData1.substring(0,imageData1.lastIndexOf('/')+1);
  console.log(filename);
  let filemoves=filename.split("?")
  console.log(filemoves[0]);
  let filessaves=filemoves[0]
       //then use the method reasDataURL  btw. var_picture is ur image variable
       this.file.readAsDataURL(path, filessaves).then(res=> this.pic_set = res  );
  this.file.resolveLocalFilesystemUrl(imageData1).then((entry: FileEntry) => {
    entry.file(file => {
      console.log(file);
      this.pic_hole =file;
      this.pic = file.type;
      this.pic_set= imageData1;
      console.log('file==='+file);
      console.log('imageData==='+imageData1);
      this.pic_captured = file.name;
      const reader = new FileReader();
      reader.onload = () => {
        const formData = new FormData();
        this.imgBlob = new Blob([reader.result], {
            type: this.pic
        });

    };
    reader.readAsArrayBuffer(this.pic_hole);
      
      
    });
  });
}, (err) => {
  // Handle error
});

    }

}
