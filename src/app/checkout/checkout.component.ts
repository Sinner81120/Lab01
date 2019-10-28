import { Component, OnInit } from '@angular/core';
import { Cartlab08Service } from '../cartlab08.service'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items;
  constructor(private cart: Cartlab08Service) { }

  ngOnInit() {
    this.items = this.cart.items
  }
  Total(){
    let total = 0;
    for(let item of this.items){
      total += item.price * item.quality
    }
    return total
  }
}
