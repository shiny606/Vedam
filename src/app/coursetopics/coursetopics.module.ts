import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CoursetopicsPage } from './coursetopics.page';

import { CoursetopicsPageRoutingModule } from './coursetopics-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursetopicsPageRoutingModule
  ],
  declarations: [CoursetopicsPage]
})
export class CoursetopicsPageModule {}
