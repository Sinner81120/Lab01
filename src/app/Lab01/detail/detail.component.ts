import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {CartServiceService} from '../../cart-service.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product : any;
  pid;
  products = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "../../../assets/leaf-rake.jpg"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "../../../assets/garden-cart.jpg"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "../../../assets/hammer.jpg"
    },
    {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2016",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "../../../assets/saw.jpg"
    },
    {
      "productId": 10,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2015",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "../../../assets/vg-controller.jpg"
    },
];
  constructor(private route: ActivatedRoute, private location : Location, private cart:CartServiceService) { }
  Goback() {
    this.location.back();
  }
  ngOnInit() {
    this.route.paramMap.subscribe(para => {
      this.pid = para.get('productId');
    });
    this.product=this.products.find(p => p.productId == this.pid);
  }
  addToCart(){
    let appProduct = Object.assign(this.product,{'quality':1});
    this.cart.addToCart(appProduct);
    alert("Sản phẩm đã được thêm vào giỏ hàng của bạn.")
  }
}
