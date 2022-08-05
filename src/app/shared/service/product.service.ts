import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  
  getProductById() {
   
    return this.http.get<any>('http://localhost:9091/api/get-product/1');
  }
}
