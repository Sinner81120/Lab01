import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  show = false;
  buttonName = 'Show';
  name ="Leaf Rake";
  code ="GDN-0011";
  des = " Leaf Rake";
  avai = "Mar 19, 2016";
  pri = "$19.95";
  star = 3;
  urli = "../../assets/leaf-rake.jpg";
  
  products = [
        {
          url:"../../assets/leaf-rake.jpg",
          productName: "Leaf Rake",
          productCode: "GDN-0011",
          releaseDate: "Mar 19, 2016",
          price: "$19.95",
          starRating:3,
        },
        {
          url:"../../assets/garden-cart.jpg",
          productName: "Graden Cart",
          productCode: "GDN-0023",
          releaseDate: "Mar 19, 2016",
          price: "$32.99",
          starRating:4,
        },
        {
          url:"../../assets/hammer.jpg",
          productName: "Hammer",
          productCode: "TBX-0048",
          releaseDate: "May 21, 2016",
          price: "$8.99",
          starRating:4,
        },
        {
          url:"../../assets/saw.jpg",
          productName: "Saw",
          productCode: "TBX-0022",
          releaseDate: "May 15, 2016",
          price: "$11.55",
          starRating:3,
        },
        {
          url:"../../assets/vg-controller.jpg",
          productName: "Video Game Controller",
          productCode: "GMG-0042",
          releaseDate: "Oct 15, 2015",
          price: "$35.95",
          starRating:5,
        },
    ];
  constructor() { }
  ngOnInit() {
  }
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show)
      this.buttonName = 'Hide';
    else
      this.buttonName = 'Show';
  }
}

