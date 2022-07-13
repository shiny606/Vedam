import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SpritualPage } from './spritual.page';

import { SpritualPageRoutingModule } from './spritual-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpritualPageRoutingModule
  ],
  declarations: [SpritualPage]
})
export class SpritualPageModule {}
