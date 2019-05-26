export interface DateModel {
  year: number;
  month: number;
  day: number;
}

export class CustomDate {
  private _date: DateModel;

  constructor(date: Date) {
    this._date.day = date.getDate();
    this._date.month = date.getMonth() + 1;
    this._date.year = date.getFullYear();
  }

  get date(): DateModel {
    return this._date;
  }
}