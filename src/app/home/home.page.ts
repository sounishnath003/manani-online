import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService, Product } from '../services/data.service';

export interface DataServe {
  products: Product[];
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: DataServe = null;
  products: Product[];
  // tslint:disable-next-line: variable-name
  constructor(private _dataservice: DataService) {
    this.getProducts();
  }

  refresh(ev) {
    // setTimeout(() => {
    //   ev.detail.complete();
    // }, 3000);
      console.log('Begin async operation');
      setTimeout(() => {
      console.log('Async operation has ended');
      ev.target.complete();
    }, 2000);
  }

  private getProducts() {
    this._dataservice.getProducts().subscribe((produtss) => {
      this.data = produtss;
      this.products = this.data.products;
    });
  }
}
