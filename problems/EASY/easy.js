//This is a function that is a closure and returns another function
function todayExercise() {
  return function (activity) {
    let message = "Today's exercise: " + activity;
    return message;
  };
}
//This variable defines todayExcersise() with exercise
const exercise = todayExercise();
//This logs the function with the parameter activity that inputs the defined activity in the console.log
console.log(exercise("Running"));
console.log(exercise("Swimming"));
console.log(exercise("Dancing"));
console.log(exercise("Fencing"));
