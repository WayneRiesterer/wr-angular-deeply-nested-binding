import { Student } from '../domain/student.model';
import { Course } from '../domain/course.model';
import { Enrolments } from '../domain/enrolments.model';


export const ENROLMENTS_DATA: Enrolments = {
  course: new Course('Angular', 22),
  students: [
    new Student('Wayne', 'Riesterer', '06-18-1972'),
    new Student('Renae', 'Riesterer', '06-18-1972'),
    new Student('Lachlan', 'Henley', '06-18-1972')
  ]
}