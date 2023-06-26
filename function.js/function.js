// DECLARE A FUNCTIONS //


// create a function which takes username as an arguments and prints an customized welcome message //

// function SayHello(UserName) {
// console.log(`Hello ${UserName}`);
// }

// // invoking function --> calling or using function//
// SayHello('barath');



       // TOTAL SUM OF FUNCTION //

// function sum(numberOne,numberTwo,numberThree,numberFour) {
// const total = numberOne + numberTwo +  numberThree + numberFour;
// console.log(`total ${total};`)
// } 
// sum(2, 5, 8, -10);

// function numbers( numberOne,numberTwo,numberThree){
// const total =  numberOne + numberTwo - numberThree;
// console.log(`total ${total}`)
// }
// numbers(100, 50, 150)


// default function //
// function classStudent(firstBench,lastBench,middleBench=0) {
//      const numberofstudent =firstBench + lastBench+ middleBench;
//  console.log(`numberofstudent ${numberofstudent};`)
// }
// classStudent(4,5,3) //--> this is correct
// classStudent(5,2)//--> when we give 3arguments and in function only 2 they through result as a nan
// classStudent(5,3)//--> we can alter in arguments using  equal' = '



                      // declarative function 
// if we use declarative function we can use anywhere
// sum(5,10)
// sum(10,30)
// function sum (a,b) {
//        console.log(a * b);
// }


// function expression
// we cant use like declarative function cant use anywhere --> result ((error))
// sum(5,5);
// const value = function profit(a,b){
// console.log( a + b);
// }
// above declare and expression functions are ES5 //

       // ES6 FUNCTION

 // ARROW FUNCTION //--> SAME LIKE EXPRESSION FUNCTION BUT ONE SMALL CHANGE 


//  const dailyProfit = (dayOne,dayTwo)=>{
// console.log(dayOne + dayTwo);
// }
//  dailyProfit(500,300);
//  dailyProfit(100,50)

 
  // return keyword //
// function salary(){
//        console.log('hello');
//        return;
//        console.log('welcome')
// }
// salary();

// another way
// function sum(dayOne,dayTwo){

// return dayOne * dayTwo

// }
// sum(5,5);
// console.log(sum(5,5));

// const total = sum(5,10);
// console.log(total);


// function getSum(personOne,personTwo){

//      return personOne + personTwo;
// }
// getSum(9,8)
// console.log(getSum(5,5));
 
// const total = getSum(5,5)
// console.log(total);


// explicit arrow function //
// const sum = (personOne,personTwo) => {
// return personOne + personTwo
// }
// console.log(sum(8,10));


// implicit arrow function // without {}
 
