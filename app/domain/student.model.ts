import { CustomDate } from './date.model';

export class Student {
  constructor(
    public givenName: string,
    public familyName: string,
    public dateOfBirth: CustomDate
  ) {}
}