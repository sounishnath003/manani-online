import { Component, OnInit } from '@angular/core';
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
export class HomePage implements OnInit {
  data: DataServe = null;
  products: Product[];
  // tslint:disable-next-line: variable-name
  constructor(private _dataservice: DataService, private router: Router) {
    this.getProducts();
  }

  ngOnInit(): void {
    // this.reloadPage() ;
  }

  refresh(ev) {
    console.log('Begin async operation');
    this.reloadPage();
    setTimeout(() => {
      console.log('Async operation has ended');
      ev.target.complete();
    }, 2000);
  }

  private reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  private getProducts() {
    setTimeout(() => {
      this._dataservice.getProducts().subscribe((produtss) => {
        this.data = produtss;
        this.products = this.data.products;
      });
    }, 2200);
  }

  public goNewProduct() {
    this.router.navigateByUrl('/new-product');
  }

}
