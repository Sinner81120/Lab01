import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab051',
  templateUrl: './lab051.component.html',
  styleUrls: ['./lab051.component.css']
})
export class Lab051Component implements OnInit {
  hs = {
    name : null,
    date : null,
    diem : null,
    status : null,
  }
  constructor() { }

  ngOnInit() {
  }
  Tinhhl(){
    if(this.hs.diem < 5){
      this.hs.status = "Rớt";
    }
    else  this.hs.status = "Đậu";
  }
}
