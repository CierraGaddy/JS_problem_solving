/*This is the initial closure function that stores the variables that are sensitive data.
The object PII was defined with name and SSN */
function privateInfo(name, ssn) {
  const PII = {
    name: name,
    SSN: ssn,
  };
  //These are the internal functions that return the name or SSN separately
  return {
    getName: function () {
      return PII.name;
    },
    getSSN: function () {
      return PII.SSN;
    },
  };
}

/*This variable connects to the function and makes defines 
the parameters as John and 123-45-6789*/
const patient2 = privateInfo("John", "123-45-6789");
//These log the patient information seperatly using dot notation to pull fromthe objects

console.log(patient2.names); //This is undefined because there is not an object item of "names"
console.log(patient2.ssn); //This is undefined because there is not a lowercase object item of "ssn"
console.log(patient2.getName());
console.log(patient2.getSSN());
