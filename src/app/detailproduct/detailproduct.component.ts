import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Guitar } from '../Guitar';
import { Categories } from '../Categories';
import { HttpClient } from '@angular/common/http';
import { Cartlab08Service } from '../cartlab08.service'

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient, private cart: Cartlab08Service) { }
  product: any;
  listcate: any;
  id;
  count: number = 1;
  ngOnInit() {
    this.route.params.subscribe(x => {
      this.id = x.id
    })
    this.getData().subscribe(data => {
      this.product = data.find(x => x.id == this.id)
    })
    this.getListCate().subscribe(data => {
      this.listcate = data
    })
  }
  getData(): Observable<Guitar[]> {
    return this.http.get<Guitar[]>('../../assets/guitarResource/database/guitar.json')
  }
  getListCate(): Observable<Categories[]> {
    return this.http.get<Categories[]>('../../assets/guitarResource/database/categories.json')
  }
  addtoCart() {
    alert('Đã thêm sản phẩm vào giỏ hàng')
    let item = Object.assign(this.product, { 'quality': this.count });
    this.cart.addToCart(item)
  }
}
