import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

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
  providedIn: 'root',
})
export class DataService {
  products: Product[] = null;
  constructor(private http: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.API_URL);
  }
}
