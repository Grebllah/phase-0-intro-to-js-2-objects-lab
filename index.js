// Write your solution in this file!
const employee = {
    name: "John Doe",
    streetAddress: "123 Main st."
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employeeNew = {
        ...employee,
        [key]: value,
    } 
    return employeeNew
    }
function destructivelyUpdateObject(obj, key, value) {
    obj[key] = value; //Why are we using bracket notation here?
    return obj;
}
function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey (employee, key) {
    const employeeNew = {
        ...employee
    }
    const employeeKey = employeeNew[key]
    delete employeeNew[key]
    return employeeNew
}
function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key]
    return employee
}