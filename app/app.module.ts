import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HrComponent } from './hr/hr.component';
import { TrainingComponent } from './training/training.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, NgbModule.forRoot()],
  declarations: [AppComponent, HrComponent, TrainingComponent, StudentListComponent, StudentDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
