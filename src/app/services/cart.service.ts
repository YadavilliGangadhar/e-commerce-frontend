import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // Add environment to manage API base URL

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseUrl = `${environment.apiUrl}/cart/user`; // Add your base API URL

  constructor(private http: HttpClient) { }

  // Get cart items
  getCartItems(): Observable<any> {
    return this.http.get(`${this.baseUrl}/get`);
  }

  // Add product to cart
  addToCart(cartItem: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, cartItem);
  }

  // Update cart item quantity
  // updateCartItem(itemId: number, quantity: number): Observable<any> {
  //   return this.http.put(`${this.baseUrl}/update/${itemId}`, { quantity });
  // }

  // Remove product from cart
  removeCartItem(itemId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${itemId}`);
  }
}
