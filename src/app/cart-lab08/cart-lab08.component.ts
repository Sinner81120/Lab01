import { Component, OnInit } from '@angular/core';
import { Cartlab08Service } from '../cartlab08.service'
import { Items } from '../Items'

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
      let sd = this.items.filter(student => {
        return student.id !== id
      }
      )
      this.items = sd;
    }
  }
}
