// {
//   allEmployees: { engineering: [ 'Bob', 'Jane' ], marketing: [ 'Sylvie' ] },
//   getNumberOfDepartments: [Function: getNumberOfDepartments]
// }
export default function createIteratorObject (report) {
  const allEmployees = []; // initialize empty list
  for (const depts in report.allEmployees) { // loop thru the employees section
    // unpack all employee in a dept
    const people = [...report.allEmployees[depts]];
    allEmployees.push(...people); // append to the array
  }
  // console.log(allEmployees);
  return allEmployees;
}
