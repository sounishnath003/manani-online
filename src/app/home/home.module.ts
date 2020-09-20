import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { MessageComponentModule } from '../message/message.module';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClient,
    CommonModule,
    FormsModule,
    IonicModule,
    MessageComponentModule,
    HomePageRoutingModule
  ],
  providers: [DataService],
  declarations: [HomePage]
})
export class HomePageModule {}
