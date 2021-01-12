import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacteresPage } from './characteres.page';

const routes: Routes = [
  {
    path: '',
    component: CharacteresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacteresPageRoutingModule {}
