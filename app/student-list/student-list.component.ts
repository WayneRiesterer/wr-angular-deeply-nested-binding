import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Student } from '../domain/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  @Input() students: Array<Student>;
  @Output() studentSelected = new EventEmitter<Student>();

  selectStudent(student: Student): void {
    this.studentSelected.emit(student);
  }

}