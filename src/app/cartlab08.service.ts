import { Injectable } from '@angular/core';
import { Items } from './Items'
@Injectable({
  providedIn: 'root'
})
export class Cartlab08Service {
  items = [];
  constructor() {
  }
  addToCart(product: Items) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }

}
