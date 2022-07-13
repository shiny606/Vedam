import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SocialPage } from './social.page';

import { SocialPageRoutingModule } from './social-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocialPageRoutingModule
  ],
  declarations: [SocialPage]
})
export class SocialPageModule {}
