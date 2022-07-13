import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { BiblecontentPage } from './biblecontent.page';

import { BiblecontentPageRoutingModule } from './biblecontent-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BiblecontentPageRoutingModule
  ],
  declarations: [BiblecontentPage]
})
export class BiblecontentPageModule {}
