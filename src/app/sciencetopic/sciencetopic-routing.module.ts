import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SciencetopicPage } from './sciencetopic.page';

const routes: Routes = [
  {
    path: '',
    component: SciencetopicPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SciencetopicPageRoutingModule {}
