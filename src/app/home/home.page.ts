import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private _dataservice: DataService, private router: Router) {
    this.getProducts();
  }

  refresh(ev) {
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

  public goNewProduct() {
      this.router.navigateByUrl('/new-product') ;
  }

}
