import { Injectable } from '@angular/core';
import { StudentInfo } from '../student-info.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentInfoServiceService {

  constructor(private http: HttpClient) { }

  getStudent(): Observable<StudentInfo[]> {
    return this.http.get<StudentInfo[]>('http://localhost:5171/api/students');
  }
}
