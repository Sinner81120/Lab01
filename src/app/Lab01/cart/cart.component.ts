import { Component, OnInit } from '@angular/core';
import {CartServiceService} from '../../cart-service.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items= [];
  Clear(){
    let Choose = confirm("Do you want to clear your cart ??")
    if(Choose){
      this.items = this.cart.clearCart();
    }
  }
  Buy(){
    alert("Mua hàng thành công");
    this.items = this.cart.clearCart();
  }
  constructor(private cart:CartServiceService) { }

  ngOnInit() {
    this.items = this.cart.getItems();
    
  }

}
