import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../model/student';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'password', 'designation', 'department', 'salary', 'actions'];
  dataSource: Student[] = [];

  constructor(private service: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.service.getStudents().then(res => this.dataSource = res);
  }

  delete(index: number) {
    let id = this.dataSource[index].id as number;
    this.service.delete(id).subscribe(() => {
      const newData = this.dataSource.filter((s, i) => i != index);
      this.dataSource = newData;
    })
  }

  edit(index: number) {
    this.service.student = {...this.dataSource[index]};
    this.router.navigate(['/']);
  }

}
