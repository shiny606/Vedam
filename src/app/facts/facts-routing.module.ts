import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactsPage } from './facts.page';

const routes: Routes = [
  {
    path: '',
    component: FactsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactsPageRoutingModule {}
