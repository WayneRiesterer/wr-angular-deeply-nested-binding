import { Component, OnInit, Input } from '@angular/core';

import { Enrolments } from '../domain/enrolments.model';
import { Student } from '../domain/student.model';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  @Input() enrolments: Enrolments;
  studentSelected: Student = undefined;


  constructor() { }

  ngOnInit() {
  }

}