import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FactsPage } from './facts.page';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
import { FactsPageRoutingModule } from './facts-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,NgxIonicImageViewerModule,
    FactsPageRoutingModule
  ],
  declarations: [FactsPage]
})
export class FactsPageModule {}
