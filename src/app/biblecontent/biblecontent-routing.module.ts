import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiblecontentPage } from './biblecontent.page';

const routes: Routes = [
  {
    path: '',
    component: BiblecontentPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiblecontentPageRoutingModule {}
