// Write your solution in this file!
// Step 1: Create an initial employee object with two key-value pairs
const employee = {
    name: "Edgar",
    streetAddress: "120 Moringa Way"
  };
  
  // Step 2: Non-destructively update employee — returns a new object
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Create a copy of employee using the spread operator, then update/add the key
    return {
      ...employee,
      [key]: value
    };
  }
  
  // Step 3: Destructively update employee — directly modifies the original object
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Mutates the original object
    return employee;
  }
  
  // Step 4: Non-destructively delete a key from employee
  function deleteFromEmployeeByKey(employee, key) {
    // Create a copy using the spread operator
    const newEmployee = { ...employee };
    delete newEmployee[key]; // Remove the key from the new object only
    return newEmployee;
  }
  
  // Step 5: Destructively delete a key from the employee object
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Mutates the original object
    return employee;
  }
  