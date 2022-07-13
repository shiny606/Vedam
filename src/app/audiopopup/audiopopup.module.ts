import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AudiopopupPage } from './audiopopup.page';

import { AudiopopupPageRoutingModule } from './audiopopup-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudiopopupPageRoutingModule
  ],
  declarations: [AudiopopupPage]
})
export class AudiopopupPageModule {}
