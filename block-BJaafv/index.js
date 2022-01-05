1. What is the difference between the two `sum` function given below?

```js
// first
function sum(a, b) {
  return a + b;
}

// second
function sum(a, b) {
  console.log(a + b);
}
```

// first function  return a output  when its called .
// Second function only logs the value   




2. If we store the returned value of both functions above in variable `first` and `second` what will be the value of `first` and `second`.

// if we store  the value of both function in variable  then first variable return a value with its type 
// and second variable only logs  the value but  the type remains  undefined

3. What will be the output when you call above `sum` function (first) with three parameter like `sum(12, 24, 35)`. Explain why?

// if we  pass three arguments to the  function  then function will accept only two and return 
// the addition of only two  numbers . Becuase in the  function  definition we only define two parameters . so it will take only
// two inputs 

4. Can you store the first `sum` function in a variable named `add`. If yes why? If no why?

Yes we can store the first sum function in a variable named as  add . This  function is called Anonymous function
or function expression but then  we have not to give   function  name sum 
Example :
const add =  sum(a, b) {
    return a + b;
  }


// 5. Declare a function named `sayHello` the accepts a parameter `name` and returns the name like `Hello Arya`.

function sayHello(name) {
    return 'Hello ${name}'
}
sayHello("Arya");



6. What will be the output of the function below and why?

```js
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  return message;
}

showMessage();
```


//Output --  returns a string when called 
   //         Hello John // function finds   the variable named userName first in the function itself  then it will
 //           take  the  variable value from the global variabel named as userName ; 


 7. What will be the output for `Output1` `Output2` and `Output3` in the code below.

```js
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  return message;
}

alert(userName); // alert a message - John

showMessage(); //  This will Execute  the  funtion  // return a  string => Hello John 

alert(userName); // alert a message - John
```

8. What is a Anonymous Function give example of three functions.

// Anonymous  Function - A function  which are  stored inside  a variable  and have no function name is known as  Anonymous 
 //function   We  can call these function by the name of variable followed by ()  

 Example :
 const add = function (a ,b){
     return a+b;
}
const fullName = function(firstName.secondName){
    return `${firstName}${secondName}`;
}
const subtract = function (a ,b){
    return a-b;
}

9. Can function declaration be a Anonymous Function? Explain

Answer : No function declaration can not be Anonymous function . Because a fucntion declaration always  have 
a function name  to call so how can a function with its name can be Anonymous.
so a Anonymous function always inside a  variable with no  name  so then we call it by its variable name which hold the 
function so in this way  a function become Anonymous ;


10. Give 5 example of good naming convention for defining a function. You can read the details below to do that.

calculateTax();
getUserAddress();
calculateBill();
getlocation();
checkAdult();

