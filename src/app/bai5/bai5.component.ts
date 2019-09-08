import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai5',
  templateUrl: './bai5.component.html',
  styleUrls: ['./bai5.component.css']
})
export class Bai5Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  svs = [
    {
      id: "1",
      firstName: "Minh",
      lastName: "Nguyễn",
      email: "minhnguyen@gmail.com"
    },
    {
      id: "2",
      firstName: "Ngọc",
      lastName: "Nguyễn",
      email: "ngocnguyen@gmail.com"
    },
    {
      id: "3",
      firstName: "Văn",
      lastName: "Nguyễn",
      email: "vannguyen@gmail.com"
    },
    {
      id: "4",
      firstName: "Phụng",
      lastName: "Võ",
      email: "vophungssn@gmail.com"
    },
    {
      id: "5",
      firstName: "Hoàng",
      lastName: "Nguyễn",
      email: "minhhoangnguyen@gmail.com"
    }, 
    {
      id: "6",
      firstName: "Đào",
      lastName: "Nguyễn",
      email: "minhnguyendaonguyen@gmail.com"
    },
     {
      id: "7",
      firstName: "Minh",
      lastName: "Nguyễn",
      email: "ngocminhnguyen@gmail.com"
    },
     {
      id: "8",
      firstName: "Méo",
      lastName: "Nguyễn",
      email: "minhméonguyen@gmail.com"
    }
  ]
}
