import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificatPageRoutingModule } from './notificat-routing.module';

import { NotificatPage } from './notificat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificatPageRoutingModule
  ],
  declarations: [NotificatPage]
})
export class NotificatPageModule {}
