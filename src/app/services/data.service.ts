import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";

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
  providedIn: "root",
})
export class DataService {
  public product: Product;
  constructor(private http: HttpClient) {}

  public getProducts(): Observable<DataServe> {
    return this.http.get<DataServe>(environment.API_URL);
  }

  public findProductById(id: number): Observable<FindProduct> {
    return this.http.get<FindProduct>(environment.API_URL + `/find/${id}`);
  }
}
