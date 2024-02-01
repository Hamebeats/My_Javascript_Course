console.log('Hello World')
let age = 25
console.log(age)
let name = 'Hamebeats'
console.log(name)
//NON PRIMITIVE DATA TYPE
//-Object type
const person = {
    firstname : 'Hame',
    lastname : 'Beats',
    age : 30
}
console.log(person. firstname)
//-Array type
const oddNumber = ['hame', 'beats', 'kaggwa', 'ham']
console.log(oddNumber[2])
//OPERATORS
//-Assignment operators
let x = 10
let y = 5 
//-Arithmetic operators
console.log( x + y)
console.log( x - y)
console.log( x / y)
console.log( x * y)
console.log( x % y)
//-Comparison operators
console.log(x == y)
console.log(x != y)
console.log(x === y)
console.log(x !== y)
console.log(x > y)
console.log(x < y)
console.log(x >= y)
console.log(x <= y)
//-Logical operators
const isNotValidNumber = x < 12 && 8 > y
const isValidNumber = x > 12 || 8 > y
console.log(isNotValidNumber)
console.log(isValidNumber)
const ham = false
console.log(!ham)
const Kaggwa = true 
console.log(!Kaggwa)
//-string operators
console.log('Hame' + 'beats')
//-ternary operators
const isEven = 10%3 ===0? true:false
console.log(isEven)
//CONVERSIONS
//-implicit
console.log('4' - '3')
console.log('5' - true)
console.log('5' - false)
console.log('4' - null)
console.log('4' - undefined)
console.log('4' - NaN)
//-explicit
console.log(Number('20'))
//console.log(SparseInt('20'))
console.log(parseFloat('3.14'))
console.log(String(500))
console.log(500 .toString())
//EQUALITY
const var1 = 10
const var2 = '10'
console.log(var1 == var2)
console.log(var1 === var2)
//CONDITIONS
//-If, else if and else conditions
const number = 10
if(number < 8) {
    console.log('This is the right amount to use')
} else if(number === '10') {
    console.log('Ham is a genius')
} else if( number !=10 ) {
    console.log('I think i have found it')
} else {
    console.log('This has been a failed mission')
}
//-We can also use the switch conditions too
const color = 'brown'
switch(color) {
    case 'red':
        console.log('A red tomato')
        break
    case 'pink':
        console.log('Roses can also be pink')
        break
    case 'orange':
        console.log('Did orange come before orange')
        break
    case 'brown':
        console.log('Wait it is me!')
        break
    default:
        console.log('It wasnt meant to be!')
}
//LOOPS
//-For loops
function Hame () {
}
for (x = 6; x >= 1; x--) {
    console.log('Ich bedanke mich' + x)
}
//-while loops
let f = 10
while (f >= 4) {
    console.log('i am a genius' + f)
    f--
}
//-do...while loops
let k = 1
do {
    console.log('I have found the do while loop' + k)
    k++
} while( k<=5 )
//-For... of loop, This is used mostly for arrays
const numArray = [' is a chicken', ' jumps', ' can even swim', ' has another name of dance', 5]
for (const value of numArray) {
    console.log('My name is Arrays' + value)
}//FUNCTIONS
function greet(username, surname) {
    console.log(username + ' is a great coder')
    console.log(surname + ' is his other name')
}
greet('Ham','Kaggwa')
function numb (a, b) {
    if (a > 13) {
        return a + b
    } else if( b >= 6) {
        return a / b
        console.log('It is gonna be a lovely day')
    } else {
        return 'Mission failed'
    }
}
const sum = numb(10, 5)
console.log(sum)
//SCOPE
//-Block scope
let myNickName = 'Hamebeats'
if ( true) {
    const mySurname = 'Kaggwa'
    const myNickname = 'Hame'
    console.log(mySurname)
    console.log(myNickName)
}
//console.log(myNickname)- This wont work, meanwhile
// myName wont be logged to the console because the declared variable is inside a block
//-Function scope
function testNum() {
    const myFirstName = 'Ham'
    let myNickName = 'Beats'
    console.log(myFirstName)

}
console.log(myNickName)
//myNickName wont be reassigned the new value of 'Beats' but rather keep the first one
testNum()
//NESTED FUNCTIONS SCOPE
let a = 10
function outer(a) {
   let b = 20
    function inner(){
        let c = 30
        console.log(a + b, b, c)
    }inner()
}outer(5)
//CLOSURES
function chicken() {
    let counter = 0
    function soup() {
    counter++
    console.log(counter)
}  
return soup
} 
 const food = chicken()
 food()
 food()
 food()
//outer(10)
//FUNCTION CURRYING
//Certainly! Function currying in JavaScript is a technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. Instead of passing all arguments at once, you pass them one by one, creating a chain of functions.
//Here's a simple example to illustrate:
// Non-curried function
function add(a, b, c) {
  return a + b + c;
}
console.log(add(1, 2, 3)); // Outputs: 6

// Curried version
function curryAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(curryAdd(1)(2)(3)); // Outputs: 6
//In the curried version, curryAdd takes the first argument (a) and returns a function that takes the second argument (b), which, in turn, returns a function taking the third argument (c). This allows you to call each function with one argument at a time, creating a more modular and flexible way of using the function.
//Currying can be useful for creating partially applied functions, where you can fix some arguments in advance and reuse the partially applied function with different values for the remaining arguments.
//THIS KEYWORD
// Example object
//-Implicit binding
const people = {
    name: 'John',
    age: 30,
    favfood: 'chicken',
    greet: function() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old and ${this.favfood} is my fav food.`);
    }
  }
  people.greet();

  const identity = {
    spritzName: 'Hamebeats',
    vorName: 'Kaggwa',
    caller: function() {
        console.log(`This is ${this.spritzName} but my real name is ${this.vorName}.`)
    }
  }
  identity.caller()
  //-Explicit binding
  //beispiel
  function caller() {
    console.log(`This is ${this.spritzName} but my real name is ${this.vorName}.`)
  }
  caller.call(identity)
  //noch ein beispiel
  function greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
  const Huhn = {
    name: 'John',
    age: 30
  };
  greet.call(Huhn);
  //-New binding
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    };
  }
  const john = new Person('John', 30);
  john.greet();
  //noch ein beispiel
  function Cities(location, theYear) {
    this.location = location,
    this.theYear = theYear,
    this.origin = function () {
        console.log(`Hallo, I am Kaggwa and am from ${this.location} and it was founded in ${this.theYear}`)
    },
    this.foodEaten = function () {
        let Checkout = 20
        if(Checkout >=15) {
            console.log(`You have arrived in ${this.location} and you can even eat ${this.theYear} burgers.`)
        }
    }
  }
const p1 = new Cities('Germany', 1990)
p1.origin();
const p2 = new Cities('Uganda', 20)
p2.foodEaten()
//PROTOTYPE
function City(fName, lName) {
    this.firstName = fName
    this.lastName = lName
}

City.prototype.getCities = function() {
    return this.firstName + ' ' + this.lastName
}
const City1 = new City('Berlin', 'Hamburg')
const City2 = new City('Munich', 'Koeln')
console.log(City1.getCities())
console.log(City2.getCities())
//PROTOTYPO INHERITANCE
function superHero(fName, lName ) {
    this.isSuperHero = true
    City.call(this, fName, lName)
}
superHero.prototype.fightCrime = function() {
    console.log('Fighting crime')
    return this.firstName + ' ' + this.lastName
}
superHero.prototype = Object.create(City.prototype)
const batman = new superHero('Bruce', 'Wayne')
const superman = new superHero('Clark', 'Kent')
console.log(batman.getCities())
console.log(superman.getCities())
//CLASS
class Medicine {
    constructor(fName , lName) {
        this.firstName = fName
        this.lastName = lName
    }
    sayMyName() {
        return this.firstName + ' ' + this.lastName
    }
}
const classP1 = new Medicine('Berlin', 'Munich')
console.log(classP1.sayMyName())
//-Class inheritance using extend and super keywords
class Superhero extends Medicine {
    constructor(fName , lName) {
        super (fName , lName) 
        this.issuperhero = true
    }
    fightcrime() {
        console.log('Fighting crime')
    }
}
const Batman = new Superhero('Bruce', 'Wayne')
console.log(Batman.sayMyName())
//ITERABLES AND ITERATORS
const obj = {
    [Symbol.iterator] : function () {
        let Step = 0
        const greetings = {
            next: function () {
                Step++
                if (Step === 1) {
                    return {value: 'Hello', done: false}
                } else if (Step === 2) {
                    return {value:'World', done: false}
                }
                return{value: undefined, done: true}
            }
        }
        return greetings
    }
}
for (const ward of obj) {
    console.log(ward)
}
//Noch ein Beispiel
const myArray = [1, 2, 3, 4, 5];

// Iterable: myArray
// Iterator: myArray[Symbol.iterator]()
const iterators = myArray[Symbol.iterator]();

// Using the iterator
console.log(iterators.next()); // { value: 1, done: false }
console.log(iterators.next()); // { value: 2, done: false }
console.log(iterators.next()); // { value: 3, done: false }
console.log(iterators.next()); // { value: 4, done: false }
console.log(iterators.next()); // { value: 5, done: false }
console.log(iterators.next()); // { done: true }
 //GENERATORS- They can also be used as iterators but they are good for handling bulky and make followup easy
 function* generatorFunction() {
    yield 'Hello'
    yield 'World'
 }
 const generatorObject = generatorFunction()
 for (const word of generatorObject)
setTimeout(generatorFunction, 2000, word)
//console.log(word)
//ASYCHRONOUS JAVASCRIPT
function greet() {
    console.log('Hello world')
}
setTimeout(greet, 4000)
//PROMISES IN JAVASCRIPT
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {reject()}, 2000)
})
const promises = new Promise((resolve, reject) => {
    setTimeout(() => {resolve()}, 2000)
})
const onFulFillment = () => {
    console.log('Set up the table to eat Tacos')
}
const onRejection = () => {
    return 'Start cooking pasta'
}
promise.then(onFulFillment)
promise.catch(onRejection)
//Noch ein Beispiel
// Function that returns a promise
function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation (e.g., fetching data from an API)
      setTimeout(() => {
        const data = { message: "Data fetched successfully" };
        const isSuccess = true;
        if (isSuccess) {
          resolve(data); // Resolve the promise with the data
        } else {
          reject("Error fetching data"); // Reject the promise with an error message
        }
      }, 2000); // Simulating a 2-second delay
    });
  }
  fetchData()
    .then((result) => {
      console.log(result.message); // Handle successful result
    })
    .catch((error) => {
      console.log('The mission has been failed'); // Handle error
    })
    .finally(() => {
      console.log("Promise completed"); // Runs regardless of success or failure
    });
    const promise1 = Promise.resolve(3)
    const promise2 = 4000
    const promise3 = new Promise ((resolve, reject) => {
        setTimeout
    })
    //ASYNC-AWAIT
async function greet() {
    return Promise.resolve('Hello')
}
greet().then((value) => console.log(value))
//-Executions in async javascript
function resolveHello () {
    return new Promise(resolve => {
        setTimeout(function () {
            resolve('Hello')
        })
    })
}
function resolveWorld () {
    return new Promise(reject => {
        setTimeout(function () {
            reject('Hello')
        })
    })
}
//EVENT LOOPS
setTimeout(() => {
    console.log('First')
}, 0)
const Juice = fetch('https://docs.google.com/spreadsheets/d/18yhE9tJ-MAA0r3SrbU_9TrpmIiJyd6KDi1uYPSq3LC8/edit#gid=0')
Juice.then(value => {
    console.log('Promise value is ', value)
})
Juice.catch(() => {
    console.log('This was a chicken operation')
})
let gon = 0 
while (gon < 1000000) {
 gon++
}




  