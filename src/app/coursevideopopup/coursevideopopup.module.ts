import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursevideopopupPageRoutingModule } from './coursevideopopup-routing.module';

import { CoursevideopopupPage } from './coursevideopopup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursevideopopupPageRoutingModule
  ],
  declarations: [CoursevideopopupPage]
})
export class CoursevideopopupPageModule {}
