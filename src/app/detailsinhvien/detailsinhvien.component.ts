import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detailsinhvien',
  templateUrl: './detailsinhvien.component.html',
  styleUrls: ['./detailsinhvien.component.css']
})
export class DetailsinhvienComponent implements OnInit {
  student: any;
  sd;
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
  courses = [
    {
      CourseID: 1050,
      Title: "Chemistry",
      Credits: 3,
    },
    {
      CourseID: 4022,
      Title: "Python",
      Credits: 3,
    },
    {
      CourseID: 4041,
      Title: "Macroeconomics",
      Credits: 3,
    },
    {
      CourseID: 1045,
      Title: "Calculus",
      Credits: 4,
    },
    {
      CourseID: 3141,
      Title: "DjAngo",
      Credits: 4,
    },
    {
      CourseID: 2021,
      Title: "Composition",
      Credits: 3,
    },
    {
      CourseID: 2042,
      Title: "Literature",
      Credits: 4,
    }
  ];
  enrollments = [
    {
      StudentID: 1,
      CourseID: 1050,
      Grade: 'A'
    },
    {
      StudentID: 1,
      CourseID: 4022,
      Grade: 'C'
    },
    {
      StudentID: 1,
      CourseID: 4041,
      Grade: 'B'
    },
    {
      StudentID: 2,
      CourseID: 1045,
      Grade: 'B'
    },
    {
      StudentID: 2,
      CourseID: 3141,
      Grade: 'F'
    },
    {
      StudentID: 2,
      CourseID: 2021,
      Grade: 'F'
    },
    {
      StudentID: 3,
      CourseID: 1050,
      Grade: 'B'
    },
    {
      StudentID: 4,
      CourseID: 1050,
      Grade: 'B'
    },
    {
      StudentID: 4,
      CourseID: 4022,
      Grade: 'F'
    },
    {
      StudentID: 5,
      CourseID: 4041,
      Grade: 'C'
    },
    {
      StudentID: 6,
      CourseID: 1045,
      Grade: 'B'
    },
    {
      StudentID: 6,
      CourseID: 3141,
      Grade: 'A'
    },
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(para => {
    this.sd = para.get('lastName');
  });
  this.student = this.students.find(p => p.lastName = this.sd)
}
}
