//This closure function defines parameters x and y
function pizzaCuts(x, y) {
  //This function does the math and returns the message telling how much pizza each person gets
  return function () {
    //This defines the variable sclices to divide x by y
    let slices = x / y;

    /*This variable mutation defines the message that will be produced when the math is done
   and changes based on parameters x and y */
    let message = "Each person gets " + slices + " slices of pizza";

    message = message + "; from our " + x + " slice pizza";
    return message;
  };
}
//These log the messages with the function pizzaCuts based on the parameters x and y
console.log(pizzaCuts(8, 2)());
console.log(pizzaCuts(8, 3)());
console.log(pizzaCuts(21, 20)());
console.log(pizzaCuts(10, 3)());
