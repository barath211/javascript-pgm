
// -- DATA STRUCTURE--//

// *1 ARRAY
// *2 OBJECT
// THESE  TWO BELONGS TO PRIMITIVES //


// ARRAY--> LIST,ORDERED LIST'
// HOW TO DECLARE A Array

// 1-ARRAY CONSTRUCTOR
// const numbers = new Array ();
// console.log(numbers); 
// console.log(typeof numbers);


// 2-LITERAL CREATION 
// const numbers =[1,2,3,4,5];
// console.log(numbers);
// console.table(numbers);

//  const names = ['barath saran raghul mervin'];
//   console.log(names);
//   console.table(names);

// -- how to modify the array elements --// by using ( index )

//  const numbers = [1,2,3,4,5];
//  console.log(numbers);
// console.log(numbers[2]);
//  console.log(numbers[0]);
// console.log(numbers[3]);
// console.log(numbers[1]);
// console.log(numbers[4]);
 
//--how to modify the arrays//
// const numbers= [1,2,3,4,5];

// console.log(numbers);
// numbers[2] = 8;
// console.log(numbers);

//array length //
// const fruits = ['orange', 'apple', 'grapes', 'banana', 'mango'];
// const webpage = ['html', 'css', 'javascript','bootstrap', 'mongodb','reactjs'];
 //  console.log('no of fruits:', fruits.length);
// console.log('no of webpages:', webpage.length);

// how to find middle index of an Array
// const MiddleIndex = fruits.length /2;
// console.log(MiddleIndex);
// console.log(fruits [MiddleIndex]);


// const LastIndex = fruits.length-1;
// console.log(fruits[LastIndex])
// console.log(LastIndex[fruits.length]);

// HOW TO MODIFY ARRAYS --> it has used for removing last element of array//
// POP METHOD //
// const numbers = [0.1,0.2,0.3,0.4,0.5];
// console.log(numbers);
// numbers.pop();
// console.log(numbers);

// shift method --> it is used for removing 1st element of array //
// console.log(numbers);
// numbers.shift();
// console.log(numbers);


 //  slice method --> it is used for copy a part of the array //
  
//  const webpage = ['html', 'css', 'javascript','bootstrap', 'mongodb','reactjs'];
//  console.log(webpage);

//  const frontend = webpage.slice(0,3);// one way to copying array// 
//  console.log(frontend);
//  // if we need all the elements give webpage.slice(0); then it will automatically convert to length
//  //ex ['html', 'css', 'javascript','bootstrap', 'mongodb','reactjs']; like this
// const BackEnd = webpage.slice(-3,);// if we give minus value it start from last value//
// console.log(BackEnd);

//splice method it is used for removing a element //((doubt))
// const bikes = [ 'yamaha', 'bajaj', 'ninja', 'honda', ];
// console.log('bikes');
// console.log(bikes);
// // 1st is index num, next is how elements want to delete , next one is add in string//
// bikes.splice(0,2,...['suzuki', 'yamaha', 'bajaj',], );
// console.log(bikes);


// //split method --> this used for create an array from strings -- //

// const languages = 'english';
//  const mylanguages = languages.split();
// console.log(mylanguages);

// const sentence = 'Wikipedia differs from printed references in important ways. It is continually created and updated and encyclopedic articles on new events appear within minutes rather than months or years.'
// // ('') IS SPLIT EVERY ELEMENT AS A STRING -->
// //   ANOTHER ONE IS (' ') THIS IS WHERE GIVEN SPACE TAKE AS A ARRAY
// // ('a') is used for how many 'a' used in a given string
// console.log(sentence.split(' '));

// join method  is convert a array of character to words
// const brr = ['b','a','r','a','t','h'];
// console.log(brr);
// console.log(brr.join(''));

// reverse method 
// const numbers = [1,2,3,4,5];
// console.log(numbers.reverse())

// indexof method--> 
// it  is used for find the index value
// const marks = [100,110,120,130,130,140,150];
// console.log(marks.indexOf(130));
// console.log(marks.lastIndexOf(130));// when a element is repeat again if we want second value of index then we can use lastindexof

// -- Loops of array -- //
// const socialMedia = [ 'instagram', 'facebook', 'whatsapp', 'snap', 'youtube',]; 

// for(let s=0; s<5; s += 1){ console.log(socialMedia[s]);

// }

// how to find sum of array //
// const arr =[ 20,25,30,10,5,89,45,74,26,38,96,64,58,52];
// let sum = 0;
// for( let a=0; a<arr.length; a += 1 )
//  { sum = sum + arr[a]}
//    //sum  = 0 + 20  ==20
//    //sum  = 20 + 25  == 45

// console.log(sum);
 

// how to find odd number // 
// const number = [1,2,3,4,5,6,7,8,9,10];
//  const oddNumbers = [];
// for( let i = 0; i<number.length; i += 1) { 
//   if (number[i] % 2 === 1)
//   {
//  oddNumbers.push(number[i]);
//   }
// }
// console.log(oddNumbers);
