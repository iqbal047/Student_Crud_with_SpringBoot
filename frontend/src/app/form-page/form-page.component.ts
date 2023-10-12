import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {
  formGroup: FormGroup;
  controls: any = {
    "name": new FormControl(""),
    "email": new FormControl(""),
    "password": new FormControl(""),
    "designation": new FormControl(""),
    "department": new FormControl("Administration"),
    "salary": new FormControl('0'),
  };

  student: Student = {};

  constructor(private service: StudentService, private router: Router) {
    this.formGroup = new FormGroup(this.controls);
  }

  ngOnInit(): void {
    this.student = this.service.student;
    if (this.student.id) {
      this.controls['name'].setValue(this.student.name);
      this.controls['email'].setValue(this.student.email);
      this.controls['password'].setValue(this.student.password);
      this.controls['designation'].setValue(this.student.designation);
      this.controls['department'].setValue(this.student.department);
      this.controls['salary'].setValue(this.student.salary);
    }
  }

  onSubmit() {
    let student: Student = { ...this.formGroup.value };
    student.id = this.student.id;
    this.service.save(student).subscribe((res: any) => this.router.navigate(['/list']));
  }

}
