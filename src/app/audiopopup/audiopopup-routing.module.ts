import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudiopopupPage } from './audiopopup.page';

const routes: Routes = [
  {
    path: '',
    component: AudiopopupPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudiopopupPageRoutingModule {}
