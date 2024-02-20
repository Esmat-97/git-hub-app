import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificatPage } from './notificat.page';

const routes: Routes = [
  {
    path: '',
    component: NotificatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificatPageRoutingModule {}
