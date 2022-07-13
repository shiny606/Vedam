import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavedvideopopupPage } from './savedvideopopup.page';

const routes: Routes = [
  {
    path: '',
    component: SavedvideopopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavedvideopopupPageRoutingModule {}
