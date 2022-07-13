import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedvideopopupPageRoutingModule } from './savedvideopopup-routing.module';

import { SavedvideopopupPage } from './savedvideopopup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedvideopopupPageRoutingModule
  ],
  declarations: [SavedvideopopupPage]
})
export class SavedvideopopupPageModule {}
