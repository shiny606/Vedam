import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursegradesPage } from './coursegrades.page';

const routes: Routes = [
  {
    path: '',
    component: CoursegradesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursegradesPageRoutingModule {}
