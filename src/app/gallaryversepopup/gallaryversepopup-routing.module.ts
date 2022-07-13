import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GallaryversepopupPage } from './gallaryversepopup.page';

const routes: Routes = [
  {
    path: '',
    component: GallaryversepopupPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GallaryversepopupPageRoutingModule {}
