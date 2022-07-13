import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { VersePage } from './verse.page';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
import { VersePageRoutingModule } from './verse-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,NgxIonicImageViewerModule,
    VersePageRoutingModule
  ],
  declarations: [VersePage]
})
export class VersePageModule {}
