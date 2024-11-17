//This function is a constructor that creates objects with methods
function Person(name, job, age) {
  this.name = name;
  this.job = job;
  this.age = age;
  // These will log a message when the method is called
  this.exercise = function () {
    console.log("I like pie but it doesn't like me.");
  };

  this.fetchJob = function () {
    console.log(this.name + " is a " + this.job);
  };
}
/*This uses the members from the Person function and adds a languages parameter
 */
function Programmer(name, job, age, languages) {
  //The Person.call is used to connect the properties from the Person function
  Person.call(this, name, job, age);
  //Array is first empty
  this.languages = languages || [];
  //Busy property set to true by default
  this.busy = true;

  this.completeTask = function () {
    //Busy property is set to false
    this.busy = false;
  };

  this.acceptNewTask = function () {
    //Updates busy property to true
    this.busy = true;
  };
  /*This function will display a message that changes 
based on if the busy property is true or false*/
  this.offerNewTask = function () {
    if (this.busy) {
      console.log(this.name + " can't accept any new tasks right now.");
    } else {
      console.log(this.name + " would love to take on a new responsibility.");
    }
  };
  //This will push new languages to the languages array
  this.learnLanguage = function (newLanguage) {
    this.languages.push(newLanguage);
  };
  //This returns the languages in a string with commas
  this.listLanguages = function () {
    return this.languages.join(", ");
  };
}

//Testing the prototype
const person1 = new Person("Harold", "Backend Engineer", 20);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "Janitor", 55, ["HTML", "SASS", "Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31, ["HTML", "CSS", "JS", "R"]);

c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");

console.log(c1.listLanguages());
console.log(c2.listLanguages());
console.log(c3.listLanguages());

console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);

person1.exercise();
person1.fetchJob();
c1.offerNewTask();
c1.completeTask();
c1.offerNewTask();
c1.acceptNewTask();
c1.offerNewTask();
