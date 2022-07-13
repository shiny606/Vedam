import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebatePage } from './debate.page';

const routes: Routes = [
  {
    path: '',
    component: DebatePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebatePageRoutingModule {}
