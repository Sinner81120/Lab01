import { Injectable } from '@angular/core';
import { Items } from './Items'

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  items = [];
  addToCart(product : Items[]) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
  constructor() { }
}
