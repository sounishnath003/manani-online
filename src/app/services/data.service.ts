import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

export interface DataServe {
  products: Product[];
}

export interface FindProduct {
  requestedId: number;
  product: Product;
  status: number;
}
export interface Product {
  id: number;
  name: string;
  photo: any;
  custName: string;
  wholesaler: string;
  costprice: number;
  contact: string;
  sellingPrice: number;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}

@Injectable({
  // tslint:disable-next-line: quotemark
  providedIn: "root",
})
export class DataService {
  constructor(private http: HttpClient) {}

  public getProducts(): Observable<DataServe> {
    return this.http.get<DataServe>(environment.API_URL);
  }

  public findProductById(id: number): Observable<FindProduct> {
    return this.http.get<FindProduct>(environment.API_URL + `/find/${id}`);
  }

  public insertNewProduct(productData: Product) {
    console.log(environment.API_URL + `/add-product`);
    this.http
      .post(environment.API_URL + `/add-product`, productData)
      .subscribe((res) => console.log(res));
    this.reloadPage();
  }

  public deleteProductById(id: number) {
    this.http.get(environment.API_URL + `/delete/${id}`).subscribe((res) => {});
    this.reloadPage();
  }

  private reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 200);
  }
}
