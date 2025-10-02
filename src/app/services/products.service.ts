import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Product {
  productId: number;
  productName: string;
  categoryName: string;
  quantity: number;
  price: number;
  unit: string;
  description: string;
  isActive: boolean;
  createdDate: Date;
  modifiedDate: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'https://localhost:7255/api/Products'; // Your API URL
  constructor(private http: HttpClient) {}

  // GET all products
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

// Get by Id
 getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  //Create
    create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  //Update
    update(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  }

  //delete
    delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

