import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpritualPage } from './spritual.page';

const routes: Routes = [
  {
    path: '',
    component: SpritualPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpritualPageRoutingModule {}
