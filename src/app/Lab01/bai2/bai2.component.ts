import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai2',
  templateUrl: './bai2.component.html',
  styleUrls: ['./bai2.component.css']
})
export class Bai2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  students = [
    {
      fullName: "Trần Gia Phú",
      birthday: "08-11-2000",
      gender: "Nam",
      photo: "../../../assets/Phu.jpg",
      mark: 8.5
    },
    {
      fullName: "Trần Gia Hân",
      birthday: "12-12-2000",
      gender: "Nữ",
      photo: "../../../assets/59177958_1867531223351438_302516700098592768_n.jpg",
      mark: 8.5
    },
    {
      fullName: "Trần Gia Thor",
      birthday: "08-01-2000",
      gender: "Nữ",
      photo: "../../../assets/59177958_1867531223351438_302516700098592768_n.jpg",
      mark: 8.5
    }
  ]
}
