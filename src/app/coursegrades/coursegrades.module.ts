import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CoursegradesPage } from './coursegrades.page';

import { CoursegradesPageRoutingModule } from './coursegrades-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursegradesPageRoutingModule
  ],
  declarations: [CoursegradesPage]
})
export class CoursegradesPageModule {}
