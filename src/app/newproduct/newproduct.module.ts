import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewproductPageRoutingModule } from './newproduct-routing.module';

import { NewproductPage } from './newproduct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NewproductPageRoutingModule
  ],
  providers: [  ],
  declarations: [NewproductPage]
})
export class NewproductPageModule {}
