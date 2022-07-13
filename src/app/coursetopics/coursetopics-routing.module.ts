import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursetopicsPage } from './coursetopics.page';

const routes: Routes = [
  {
    path: '',
    component: CoursetopicsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursetopicsPageRoutingModule {}
