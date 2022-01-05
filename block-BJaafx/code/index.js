// //1. Using loops take 10 inputs from user and find the average of all the numbers.
// let allIndex = 0;
// let average ;
// for(let i = 1; i <=10 ; i=i+1)
// {  
//     let nums =  Number(prompt("Enter Total 10 Numbers One by One to find the Avergae :"));
//     allIndex = allIndex +nums ;
// }

//  average = allIndex/10;
//  alert( `Average of all numbers is :${average} `);   



//  2. What will be the output of the code below
//  ```js
//  let i = 0;
//  while (i < 3) {
//    println('hi');
//    i++;
//  }
//  ```

//  --- output :
// println is not any kind of function for printing output  on the screen 
// // looks like c language program (:
//  ---


// 3. Write a function named `getEvenSum` that accepts a parameter `max`. Return the sum of all even numbers. The value of max should default to 10.

// const getEvenSum = (max=10)=>{
//     let total = 0;
//     for( let i= 0; i<=max ; i++){
//         if(i%2==0){
//         total += i ;
//         }
//     }
//     return `The sum of all even numbers upto ${max} is ${total}`;
// }

// getEvenSum(16); //72
// getEvenSum(6);// 12

// 4. Write a function named `getOddSum` that accepts a parameter `max`. Return the sum of all odd numbers. The value of max should default to 10.

// const getOddSum = (max=10)=>{
//     let total = 0;
//     for( let i= 0; i<=max ; i++){
//         if(i%3==0){
//         total += i ;
//         }
//     }
//     return `The sum of all even numbers upto ${max} is ${total}`;
// }

// getOddSum(8);//9
// getOddSum(9);//18


// 5. Write a function named `getProductOfDigits` that accepts a parameter `num`. It returns the product of all the digits in the number.

// function getProductOfDigits(num){
//     let product= 1;
//     while(num > 0){
//         product = product * (num%10);
//         num = Math.floor(num/10);

//     }
//     return product;
// }

// // 6. What will be the output of the following code below in multiple conditions? Explain with reason?

// ```js
// function check(num) {
//   if (num > 5) {
//     return 'Bigger than 5'; 
//   }

//   if (num < 5) {
//     return 'Smaller than 5';
//   }

//   return num;
// }

// check(10); // output
// check(1); // output
// check(5); // output
// //
// // if  the number passed as  to parameter is  greater than 5 than output  is //  return 'Bigger than 5'; 

// // if the number  passed as  a parameter  is smaller than 5 then returned output is // Samller then 5

// // but   if the number passed as  a parameter  is  5 then  only  returned output is  5.
// // In  this program only one return statement  is going  to execute if the number is  greater than five then it will return  Bigger then 5 
// // anotherwise it will return Smaller  then  5  if  the passed input is smaller  then five 
// // anotherwise if  the passed input  is itself 5 then it  will return only  5  as   a number

// ```


// 7. What will be the output of the following code given below? Explain the reason?

// ```js
// function getOutput(name) {
//   if (name === 'Arya') return 'You are arya';
//   if (name === 'John') return 'You are john';
//   return 'Who are you';
// }

// getOutput('Arya'); // You are  arya
// getOutput('John'); // You  are john
// getOutput(); // Who are  you 

// //Reason - Rule  - we can not execute more than one return statement in the program ;
// So here we have 2 condition when   then passed input is  === Arya  then only this if block gets exected .
// OR  when    the passed input is === John then only this if block gets executed  
// OR if  the passed input is anything then Arya  and John  then this will return a string  Who are  you 
// SO Either it will return  Arya if block 
//          OR
// It will execute John if block 
//          OR
// It will return  a  string  message    Who are  you        
// ```

// 8. What will be the output of the following code given below? Explain the reason?

// ```js
// function getOutput(name) {
//   if (name === 'Arya') console.log('You are arya');
//   if (name === 'John') console.log('You are john');
//   return 'Who are you';
// }

// getOutput('Arya'); //  logs  a message  : You are arya  and  also  return  a output  Who are you
// getOutput('John'); // logs  a message  : You are john  and  also  return  a output  Who are you
// getOutput(); //  return  a string   // Who are you


// // Reason  :  in this  program there is only  one  return statement  is  used  so program is going to return this 
// either  the input passed  to the  function is  'Arya' or 'John'
// But  if  the passed  input is 'Arya' : then Arya if block  gets executed and logs You are arya and also return  a output
// But  if  the passed  input is 'John' : then john if block  gets executed and logs You are john and also return  a output
// ```


// 9. Can a function have multiple return statement? Give one example if possible and explain the reason.

// Answer : A function can  have  multiple  return statement  and  but it  can execute only one return statement .
// and after that nothing is going to execute .
// but  a  function can have multiple  return staement inside conditional statements .

// Example :

const yourName = (username) =>{
    if (username === "Rahul"){
        return `username is Rahul`;
    }
    else if(username === "Adarsh")
    {
        return `username is Adarsh`;
    }
    else if(username === "Aman"){
        return `username is Aman`;
    }
    else{
        return 'user is Unknown  to  the system'
    }
}
