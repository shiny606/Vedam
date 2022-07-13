import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CoursetermsPage } from './courseterms.page';

import { CoursetermsPageRoutingModule } from './courseterms-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursetermsPageRoutingModule
  ],
  declarations: [CoursetermsPage]
})
export class CoursetermsPageModule {}
