import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sinhvien',
  templateUrl: './sinhvien.component.html',
  styleUrls: ['./sinhvien.component.css']
})
export class SinhvienComponent implements OnInit {
  find;
  itemsPerPage : number = 3;
  p: number = 1;
  students = [
    {
      id: 1,
      firstName: "Carson",
      lastName: "Alexander",
      enrollmentDate: "2005-09-01"
    },
    {
      id: 2,
      firstName: "Meredith",
      lastName: "Alonso",
      enrollmentDate: "2002-09-01"
    },
    {
      id: 3,
      firstName: "Arturo",
      lastName: "Anand",
      enrollmentDate: "2003-09-01"
    },
    {
      id: 4,
      firstName: "Gytis",
      lastName: "Barzdukas",
      enrollmentDate: "2002-09-01"
    },
    {
      id: 5,
      firstName: "Yan",
      lastName: "Li",
      enrollmentDate: "2002-09-01"
    },
    {
      id: 6,
      firstName: "Peggy",
      lastName: "Justice",
      enrollmentDate: "2001-09-01"
    },

    {
      id: 7,
      firstName: "Laura",
      lastName: "Norman",
      enrollmentDate: "2003-09-01"
    },
    {
      id: 8,
      firstName: "Nino",
      lastName: "Olivetto",
      enrollmentDate: "2005-09-01"
    }
  ];
  totalpage = this.students.length;
  constructor() {
  }
  ngOnInit() {
  }
  DeleteStudent(id) {
    let yes = confirm("Bạn có muốn xóa học sinh này ??")
    if (yes) {
      --this.totalpage;
      let sd = this.students.filter(student => {
          return student.id !== id
        }
      )
      this.students = sd;
    }
  }
}
