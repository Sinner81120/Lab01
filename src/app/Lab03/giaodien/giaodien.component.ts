import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giaodien',
  templateUrl: './giaodien.component.html',
  styleUrls: ['./giaodien.component.css']
})
export class GiaodienComponent implements OnInit {
  titles = [
    {
      title: "Máy tính xách tay",
      loai: "Laptop"
    },
    {
      title: "Điện thoại di động",
      loai: "Phone"
    },
    {
      title: "Quạt máy",
      loai: "Fan"
    },
    {
      title: "Nhẫn",
      loai: "Ring"
    },
    {
      title: "Xe máy",
      loai: "Car"
    },
    {
      title: "Đồng hồ",
      loai: "Watch"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
