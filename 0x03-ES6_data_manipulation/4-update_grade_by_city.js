export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter(
  // return all student objects whr student.location == city
    (student) => student.location === city,
  )
    .map((student) => (
    // create new student objects
      {
        ...student,
        grade: newGrades.filter( // create a grade property in the new objs
        // where the student.id == grade.studentId ...
          (grades) => grades.studentId === student.id,
        )
          // ... assign their grades OR N/A where no grade is given for student
          .map((grades) => grades.grade)[0] || 'N/A',
      }));
}
