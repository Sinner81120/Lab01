import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guitar } from '../Guitar';
import { Categories } from '../Categories'

@Component({
  selector: 'app-lab08',
  templateUrl: './lab08.component.html',
  styleUrls: ['./lab08.component.css']
})
export class Lab08Component implements OnInit {

  constructor(private http: HttpClient) { }
  listproducts: any;
  listcate: any;
  ngOnInit() {
    this.getData().subscribe(data => {
      this.listproducts = data
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
}
