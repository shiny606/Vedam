import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursevideopopupPage } from './coursevideopopup.page';

const routes: Routes = [
  {
    path: '',
    component: CoursevideopopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursevideopopupPageRoutingModule {}
