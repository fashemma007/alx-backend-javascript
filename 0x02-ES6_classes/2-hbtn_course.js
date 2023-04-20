export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  //  Settters
  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw (TypeError('Name must be a string'));
    }
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw (TypeError('Length must be a number'));
    }
  }

  set students(students) {
    if (typeof students === 'object') {
      this._students = students;
    } else {
      throw (TypeError('Students must be an array'));
    }
  }

  // Getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
