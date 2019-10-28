import { Component, OnInit } from '@angular/core';
import { Cartlab08Service } from '../cartlab08.service'

@Component({
  selector: 'app-cart-lab08',
  templateUrl: './cart-lab08.component.html',
  styleUrls: ['./cart-lab08.component.css']
})
export class CartLab08Component implements OnInit {
  items;
  value = [];
  constructor(private cart: Cartlab08Service) { }

  ngOnInit() {
    this.items = this.cart.items
    this.items.forEach(product => {
      this.value[product.id] = product.quality;
    });
  }
  Clear(){
    this.items = this.cart.clearCart();
  }
  Total(){
    let total = 0;
    for (let item of this.items) {
      total += item.price * this.value[item.id]
    }
    return total;
  }
  downvalue(id) {
    let i = this.value[id];
    if (i > 0) {
      --i
    }
    this.value[id] = i;
  }
  upvalue(id) {
    let i = this.value[id];
    if (i < 99) {
      ++i;
    }
    this.value[id] = i;
  }
  Delete(id) {
    let yes = confirm("Bạn có muốn  xóa sản phẩm này này ??")
    if (yes) {
      let sd = this.items.filter(item => {
        return item.id !== id
      }
      )
      this.items = sd;
    }
  }
  Checkout(){
    for(let item of this.items){
      for(let itemcart of this.cart.items){
        if(itemcart.id == item.id){
          itemcart.quality = this.value[item.id]
        }
      }
    }
  }
}
