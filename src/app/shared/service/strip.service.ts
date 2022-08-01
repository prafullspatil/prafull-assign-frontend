import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StripService {
  url: any = 'http://localhost:9091/api/payment';
  constructor(private http: HttpClient) { }

  stripCheckout(data: any) {
    return this.http.post<any>(this.url, data);
  }

}
