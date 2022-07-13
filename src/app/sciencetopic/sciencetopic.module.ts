import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SciencetopicPage } from './sciencetopic.page';

import { SciencetopicPageRoutingModule } from './sciencetopic-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SciencetopicPageRoutingModule
  ],
  declarations: [SciencetopicPage]
})
export class SciencetopicPageModule {}
