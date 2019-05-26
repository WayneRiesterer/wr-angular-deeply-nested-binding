import { Component, OnInit, Input } from '@angular/core';

import { Enrolments } from '../domain/enrolments.model';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {
  @Input() enrolments: Enrolments;
  constructor() { }

  ngOnInit() {
  }

}