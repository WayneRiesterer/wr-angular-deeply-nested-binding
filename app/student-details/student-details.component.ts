import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Student } from '../domain/student.model';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  @Input() student: Student;
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.student);
    this.form = this.fb.group({
      givenName: [undefined, [Validators.required]],
      familyName: [undefined, [Validators.required]],
      dateOfBirth: [undefined, [Validators.required, Validators]]
    });
    if (this.student) {
      this.form.setValue(this.student);
      console.log(this.student);
    }
  }

}