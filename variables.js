/*variables*/
const name='barath'
console.log(name)
const DOB = '2 11 2000'
console.log(DOB)
let age = '22'
console.log(age)
let city = 'coimbatore'
console.log(city)
const address = 'bharathipuram'
console.log( address)

// operators//

// arithmetic operators +,_,*,**,/,%,
console.log(10+5) 
console.log(10-5)
console.log(10/5)
console.log(10*5)
console.log(10**5)

 //string concatenation & template literal (es6)


// template literal
const country = 'India'
const capital = 'New Delhi'
const People  = 133
const message = `${capital} is capital of ${country} it 
has ${133} million people`
console.log(message)

//comparison operators
//--> ==,!=,<,>,<=,>=,
console.log(5>2);
console.log(5==5)
console.log(10<2)
console.log(9!=9)
console.log('a' == 'a')

//logical operator 
//--> &&,||,!,
//-->&& if any one false come the output become false
//-->|| if there is one true and one false is the output is true
//--> ! opposite to the output
console.log(5>3 && 5>22) 
console.log(5>3 || 5>2) 
console.log(5>3 || 5>22) 
console.log(5>35 || 5>22) 
console.log(!(5>2))


  
const firstName = 'barath' + " ";
 const lastName = 'crazy';
 let fullName = firstName + lastName;
console.log(fullName) ;



console.log(10>22 || 5<2)
console.log(10>22 && 5<2)
console.log( !(10>22))
console.log(10>22 && 5>2)
console.log(10>22 || 5>2)


/* types of conversion*/

/* there are 3types of conversion
*string
*number
*boolean
*/

/* number to boolean */
let age = 40;
console.log(age);
console.log(typeof age);
console.log( ' Age ={age}');
age = String(age);
console.log(typeof age);

/* number to boolean */
age = Boolean(age);
console.log(age) 
console.log(typeof age)

/*( every number is default truthy value even negative numbers but expect zero(0)when zero is there the output is false ) */

/* string to number */

let population = '133';
console.log(population);
console.log(typeof population);

population = Number(population);
console.log(typeof population);
console.log(population);


/* number to boolean */

population = Boolean(population);
console.log(typeof population);
console.log(population);

// Any character /string is a truthy value expect '' 

// truthy--any number , any string is a truthy value
/* falsy value -- 0 , '' ,undefined, null , false , Nan */

let city = 'coimbatore'
console.log(city)
console.log(typeof city)

city = Number (city)
console.log(city)
console.log(typeof city)










