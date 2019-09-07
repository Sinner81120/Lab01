import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai1',
  templateUrl: './bai1.component.html',
  styleUrls: ['./bai1.component.css']
})
export class Bai1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  student = {
    fullName: "Trần Gia Phú",
    birthday: "08-11-2000",
    gender: "Nam",
    photo: "../../assets/Phu.jpg",
    mark: 8.5,
  }
}
