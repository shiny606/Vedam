import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PopupPage } from './popup.page';

import { PopupPageRoutingModule } from './popup-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopupPageRoutingModule
  ],
  declarations: [PopupPage]
})
export class PopupPageModule {}
