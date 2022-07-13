import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AboutusPage } from './aboutus.page';

import { AboutusPageRoutingModule } from './aboutus-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutusPageRoutingModule
  ],
  declarations: [AboutusPage]
})
export class AboutusPageModule {}
