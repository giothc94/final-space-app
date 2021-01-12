import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacteresPageRoutingModule } from './characteres-routing.module';

import { CharacteresPage } from './characteres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacteresPageRoutingModule
  ],
  declarations: [CharacteresPage]
})
export class CharacteresPageModule {}
