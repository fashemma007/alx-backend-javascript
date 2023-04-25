/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(students, city, newGrades) {
  // return all student objects whr student.location == city
  return students.filter((student) => student.location === city)
    .map((student) => {
      // run thru all obj in the newGrade array
      newGrades.map(((Grades) => {
        // chk if ids match
        if (Grades.studentId === student.id) {
          // assign the grades to the right student
          student.grade = Grades.grade;
        }
        // console.log(student.grade);
        // if a students grade is undefined, assign N/A to it
        if (student.grade === undefined) {
          student.grade = 'N/A';
        }
        return student;
      }));
      return student;
    });
}
