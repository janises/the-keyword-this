//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //You use the "this" keyword so that you can reference the object that is invoking the "this" function instead of typing out the name of the object every single time.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //1. Whenever a function is in the global scope, the "this" keyword refers to teh global/window object.
      //2. "this" can come before a dot and a function, and the "this" will refer to whatever is calling the function.
      //3. Inside a constructor function, "this" refers to the specific variables for each object that is created by the constructor function.
      //4. When using call or apply, the "this" is specific to whatever is being passed into the call or apply.  

  // 3) What is the difference between call and apply?

      //call and apply both all you to set the 'this' value when borrowing functions, but apply will let you pass an array of arguments, while call lets you pass arguments individually.

  // 4) What does .bind do?

      //the .bind method calls the function that the 'this' value is set to, even when a it is invoked by another object.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*
  var user = {
    username: "username",
    email: "username@email.com",
    getUsername: function() {return this.username}
  };
    //Code Here


//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername();
//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;
  this.moveCar = function() {return this.move + 10};
}
  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the move property by 10.
// The move property will be added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.



//Continuation of previous problem

var getYear = function(){
  return this.year;
};


//Above you're given the getYear function. Call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
  getYear(prius);
  getYear(mustang);

//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.apply(myUser); //Fix this

//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //It will return undefined because there is no object invoking the function.

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //It is bound to the global window object because it is inside an anonymous function.


//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.
