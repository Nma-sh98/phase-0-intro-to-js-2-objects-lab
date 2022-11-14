// Write your solution in this file!
const employee = {
    name: "Alex",
    streetAddress: "1 Main Street"
};

// updateEmployeeWithKeyAndValue(employee, key, value)

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
};

//destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};

//deleteFromEmployeeByKey(employee, key)
function deleteFromEmployeeByKey(employee, key, name) {
    const newEmployee = {...employee};
    delete newEmployee.key;
    newEmployee[key]=name;
    return newEmployee;
};
// destructivelyDeleteFromEmployeeByKey(employee, key)
function destructivelyDeleteFromEmployeeByKey(employee, key, name) {
    delete employee.key;
    employee[key]=name;
    return employee;

}