import { Component, OnInit } from '@angular/core';
import { Student } from './../Student'
@Component({
  selector: 'app-lab07',
  templateUrl: './lab07.component.html',
  styleUrls: ['./lab07.component.css']
})
export class Lab07Component implements OnInit {
  showFormEdit: boolean = false;
  formStudent = {
    id: 0,
    fullName: '',
    birthday: null,
    mark: 0,
  };

  students: Student[] = [
    {
      id: 1,
      fullName: 'Nguyễn văn tèo',
      birthday: new Date(2019, 6, 30),
      mark: 8
    },
    {
      id: 2,
      fullName: 'Phan thị nở',
      birthday: new Date(2019, 2, 29),
      mark: 8
    },
  ];

  constructor() { }
  ngOnInit() {
  }

  //xep loai
  gradeStudent(student: Student) {
    if (student.mark >= 0 && student.mark < 5) {
      return 'Yếu/Kém'
    } else {
      if (5 <= student.mark && student.mark <= 8) return 'Trung bình/Khá'
      if (student.mark > 8) return 'Giỏi/Xuất sắc'
    }
  }
  Accept() {
    for (let i of this.students) {
      if (i.id == this.formStudent.id) {
        i.fullName = this.formStudent.fullName;
        i.birthday = this.formStudent.birthday;
        i.mark = this.formStudent.mark;
      }
    }
    this.Cancel()


  }
  Add(formStudent) {
    this.formStudent.id = this.students.length + 1;
    this.students.push(formStudent)
    this.Cancel();
  }
  Edit(Student) {
    this.showFormEdit = true;
    this.formStudent.id = Student.id;
    this.formStudent.fullName = Student.fullName;
    this.formStudent.birthday = Student.birthday;
    this.formStudent.mark = Student.mark;

  }
  Cancel() {
    this.showFormEdit = false;
    this.formStudent = {
      id: 0,
      fullName: '',
      birthday: new Date().toISOString().substring(0, 10),
      mark: 0,
    };

  }
  Delete(id) {
    let check = confirm("Bạn muốn xóa sinh viên này ??")
    if (check) {
      let sd = this.students.filter(student => {
        return student.id !== id
      }
      )
      this.students = sd;
    }
  }
}
