import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(request, response) {
    response.status(200);
    results = readDatabase();
  }
}
