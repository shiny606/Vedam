import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursePage } from './course.page';

const routes: Routes = [
  {
    path: '',
    component: CoursePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursePageRoutingModule {}
