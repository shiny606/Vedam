import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ContactusPage } from './contactus.page';

import { ContactusPageRoutingModule } from './contactus-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactusPageRoutingModule
  ],
  declarations: [ContactusPage]
})
export class ContactusPageModule {}
