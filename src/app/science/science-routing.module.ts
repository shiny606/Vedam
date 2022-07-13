import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SciencePage } from './science.page';

const routes: Routes = [
  {
    path: '',
    component: SciencePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SciencePageRoutingModule {}
