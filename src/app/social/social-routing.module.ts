import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialPage } from './social.page';

const routes: Routes = [
  {
    path: '',
    component: SocialPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialPageRoutingModule {}
