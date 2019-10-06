import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab05',
  templateUrl: './lab05.component.html',
  styleUrls: ['./lab05.component.css']
})
export class Lab05Component implements OnInit {
  hcn = {
    cd : null,
    cr: null,
    S: null,
    P: null
  }
  constructor() { }

  ngOnInit() {
  }
  Tinh() {
    if(this.hcn.cd && this.hcn.cr){
    this.hcn.S = this.hcn.cd * this.hcn.cr;
    this.hcn.P = (this.hcn.cd +this.hcn.cr)*2;
    }
    else alert('Vui lòng nhập đầy đủ thông tin')
  }
}
