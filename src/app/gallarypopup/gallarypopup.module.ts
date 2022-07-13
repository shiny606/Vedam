import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { GallarypopupPage } from './gallarypopup.page';

import { GallarypopupPageRoutingModule } from './gallarypopup-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GallarypopupPageRoutingModule
  ],
  declarations: [GallarypopupPage]
})
export class GallarypopupPageModule {}
