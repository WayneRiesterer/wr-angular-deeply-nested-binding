import { Component, OnInit } from '@angular/core';

import { Student } from './domain/student.model';
import { Course } from './domain/course.model';
import { Enrolments } from './domain/enrolments.model';

import { ENROLMENTS_DATA } from './data/enrolments'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  enrolments = ENROLMENTS_DATA;
}
