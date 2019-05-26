import { Course } from './course.model';
import { Student } from './student.model';

export interface Enrolments {
  course: Course;
  students: Array<Student>;
}