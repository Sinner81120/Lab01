import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai3',
  templateUrl: './bai3.component.html',
  styleUrls: ['./bai3.component.css']
})
export class Bai3Component implements OnInit {

  constructor() { }

  ngOnInit() {
    this.products.forEach(product => {
      this.value[product.id] = 0
    });
  }
  value=[];
  downvalue(id){
    let i =this.value[id];
    if(i > 0 ){
      --i
    }
    this.value[id] = i;
  }
  upvalue(id){
    let i =this.value[id];
    if(i <99 ){
      ++i;
    }
    this.value[id] = i;
  }
  total(){
    let total = 0;
    for (let product of this.products) {
      total += product.price * this.value[product.id]
    }
    return total;
  };
  Delete(id){
    let yes = confirm("Bạn có muốn  xóa sản phẩm này này ??")
    if (yes) {
      let sd = this.products.filter(student => {
        return student.id !== id
      }
      )
      this.products = sd;
    }
  }
  products = [
    {
      id: "pd100",
      image: "../../../assets/Ram1.jpg",
      name:"Ram máy tính",
      price:400000,
    },
    {
      id: "pd101",
      image: "../../../assets/Case1.jpg",
      name:"Case - Thùng máy",
      price:600000,
    },
    {
      id: "pd102",
      image: "../../../assets/C1.jpg",
      name:"Card đồ họa",
      price:16000000,
    },
    {
      id: "pd103",
      image: "../../../assets/PC1.png",
      name:"PC Gaming",
      price:32300000,
    }
  ]
}
