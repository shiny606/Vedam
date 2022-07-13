import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { BiblePage } from './bible.page';

import { BiblePageRoutingModule } from './bible-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BiblePageRoutingModule
  ],
  declarations: [BiblePage]
})
export class BiblePageModule {}
