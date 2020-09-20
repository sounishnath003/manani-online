import { Component } from '@angular/core';
import { DataService, Product } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  products: Product[] = null ;
  constructor(private _dataservice: DataService) {
    this.getProducts() ;
   }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  private getProducts(): void {
    // this._dataservice.getProducts().subscribe(produtss => {
    //   this.products = produtss;
    // });
    // console.log(this.products);
  }


}
