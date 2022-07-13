import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentPage } from './current.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrentPageRoutingModule {}
