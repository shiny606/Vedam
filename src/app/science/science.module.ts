import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SciencePage } from './science.page';

import { SciencePageRoutingModule } from './science-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SciencePageRoutingModule
  ],
  declarations: [SciencePage]
})
export class SciencePageModule {}
