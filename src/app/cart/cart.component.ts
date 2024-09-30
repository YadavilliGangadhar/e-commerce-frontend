import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  errorMessage: string = '';

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.loadCartItems();
  }

  // Fetch cart items from the backend
  loadCartItems() {
    this.cartService.getCartItems().subscribe(
      (data: any) => {
        this.cartItems = data;
      },
      (error) => {
        this.errorMessage = 'Error fetching cart items';
        console.error(error);
      }
    );
  }

  // Remove an item from the cart
  removeFromCart(itemId: number) {
    this.cartService.removeCartItem(itemId).subscribe(
      () => {
        this.cartItems = this.cartItems.filter(item => item.id !== itemId); // Update UI after deletion
      },
      (error) => {
        console.error('Error removing item', error);
      }
    );
  }

  // Update the quantity of a cart item
  // updateQuantity(itemId: number, newQuantity: number) {
  //   this.cartService.updateCartItem(itemId, newQuantity).subscribe(
  //     () => {
  //       const item = this.cartItems.find(i => i.id === itemId);
  //       if (item) {
  //         item.quantity = newQuantity; // Update UI
  //       }
  //     },
  //     (error) => {
  //       console.error('Error updating item quantity', error);
  //     }
  //   );
  // }
}

