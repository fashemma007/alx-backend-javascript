export default function createReportObject (employeesList) {
  // get length of keys in employeesList
  const getNumberOfDepartments = () => Object.keys(employeesList).length;
  const result = {
    allEmployees: employeesList,
    getNumberOfDepartments
  };
  return result;
}
