import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.css']
})
export class ListFilmComponent implements OnInit {
  url = 'https://swapi.co/api/films/';
  data : any;
  listfilms : any;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.getFilms().subscribe(x => {
      this.data = x;
      this.listfilms = this.data.results;
    })
  }

  getFilms(){
    return this.http.get(this.url)
  } 
}
