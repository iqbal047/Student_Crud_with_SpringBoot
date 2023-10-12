import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './model/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl = 'http://localhost:8080/student';

  student: Student = {};

  constructor(private http: HttpClient) { }

  save(emp: Student): Observable<Student> {
    return this.http.post<Student>(`${this.baseUrl}/save`, emp, {
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
  }

  async getStudents(): Promise<Student[]> {
    // this.http.get<Student[]>(`${this.baseUrl}/student`);
    let data = await fetch(`${this.baseUrl}`);
    return await data?.json();
  }


  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

}
