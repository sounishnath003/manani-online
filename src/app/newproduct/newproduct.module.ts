import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewproductPageRoutingModule } from './newproduct-routing.module';

import { NewproductPage } from './newproduct.page';
import { DataService } from '../services/data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NewproductPageRoutingModule,
    HttpClientModule
  ],
  providers: [ DataService ],
  declarations: [NewproductPage]
})
export class NewproductPageModule {}
