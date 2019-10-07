import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css']
})
export class DetailFilmComponent implements OnInit {
  film: any;
  constructor(private router: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    const url = this.router.snapshot.paramMap.get('url');
    this.getDetail(url).subscribe(data => {
      this.film = data;
    })
  }
  getDetail(url: string) {
    return this.http.get(url);
  }
}
