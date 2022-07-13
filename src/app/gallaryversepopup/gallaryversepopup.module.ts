import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { GallaryversepopupPage } from './gallaryversepopup.page';

import { GallaryversepopupPageRoutingModule } from './gallaryversepopup-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GallaryversepopupPageRoutingModule
  ],
  declarations: [GallaryversepopupPage]
})
export class GallaryversepopupPageModule {}
