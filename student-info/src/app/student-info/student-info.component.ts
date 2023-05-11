import { Component, OnInit } from '@angular/core';
import { StudentInfo } from '../student-info.model';
import { Observable, of } from 'rxjs';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor } from '@progress/kendo-data-query';
import { StudentInfoServiceService } from '../service/student-info.service.service';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

  constructor(private studentService: StudentInfoServiceService) { }
  
  public students: StudentInfo[] = []; 

  ngOnInit() :void {
    console.log('test');
    this.studentService.getStudent().subscribe(
      (students) => {
        this.students = students;
      },
      (error) => {

      }
    );
  }

  public skip = 0;
  public sort: any[] = [];

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
  }

  public sortChange(sort: any[]): void {
    this.sort = sort;
  }
}
