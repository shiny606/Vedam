import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CurrentPage } from './current.page';

import { CurrentPageRoutingModule } from './current-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentPageRoutingModule
  ],
  declarations: [CurrentPage]
})
export class CurrentPageModule {}
