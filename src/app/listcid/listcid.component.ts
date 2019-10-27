import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guitar } from '../Guitar';
import { Categories } from '../Categories'

@Component({
  selector: 'app-listcid',
  templateUrl: './listcid.component.html',
  styleUrls: ['./listcid.component.css']
})
export class ListcidComponent implements OnInit {
  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  listproducts: any;
  listcate: any;
  id;
  ngOnInit() {
    this.route.params.subscribe(x => {
      this.id = x.cid
    })
    this.getData().subscribe(data => {
      this.listproducts = data.filter(cid =>{
        return cid.cid == this.id
      })
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
