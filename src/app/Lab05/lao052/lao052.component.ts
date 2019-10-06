import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lao052',
  templateUrl: './lao052.component.html',
  styleUrls: ['./lao052.component.css']
})
export class Lao052Component implements OnInit {
  nv = {
    name: null,
    salary: null,
    gender: "Nữ",
    age: null,
    rate: null,
  }
  dotuoi = [
    {
      tuoi: "Dưới 25",
      rate: 0.07
    },
    {
      tuoi: "Từ 25 đến 40",
      rate: 0.1
    },
    {
      tuoi: "Trên 40",
      rate: 0.15
    }
  ]
  constructor() {
  }

  ngOnInit() {

  }
  Tinhluong() {
    if (this.nv.name && this.nv.salary >= 2000000 && this.nv.gender) {
      let i = this.nv.salary * this.nv.rate;
      if (this.nv.gender == "Nữ") {
        i = i + 200000;
      }
      return i;
    }
  }


}
