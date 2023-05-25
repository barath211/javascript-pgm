//variables
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
 const firstName = 'barath' + " ";
 const lastName = 'crazy';
 let fullName = firstName + lastName;
console.log(fullName) ;

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
