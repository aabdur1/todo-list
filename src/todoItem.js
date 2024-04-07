export default class TodoItem {
  constructor(title, description, date, priority, notes = " ", checkList = []) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.notes = notes;
    this.checkList = checkList;
  }
}
