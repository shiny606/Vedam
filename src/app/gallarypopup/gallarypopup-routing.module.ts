import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GallarypopupPage } from './gallarypopup.page';

const routes: Routes = [
  {
    path: '',
    component: GallarypopupPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GallarypopupPageRoutingModule {}
