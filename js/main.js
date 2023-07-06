// Question 1

/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
};

function displayFavoriteFoods(obj) {
    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            console.log(key + ": " + obj[key].join(", "));
        } else if (typeof obj[key] === 'object') {
            for (let innerKey in obj[key][0]) {
                console.log(innerKey + ": " + obj[key][0][innerKey]);
            }
        } else {
            console.log(key + ": " + obj[key]);
        }
    }
}

displayFavoriteFoods(person3);

// Question 2

/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.printInfo = () => {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  };
  
  Person.prototype.addAge = (years) => {
    this.age += years;
  };
  
  let person1 = new Person("John", 25);
  let person2 = new Person("Jane", 30);
  
  person1.printInfo();
  person2.printInfo();
  
  person1.addAge(3);
  
  person1.printInfo();
  person2.printInfo();

// Question 3

/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function checkStringLength(string) {
    return new Promise((resolve, reject) => {
      if (string.length > 10) {
        resolve("Big word");
      } else {
        reject("Small Number");
      }
    });
  }
  
  checkStringLength("Hello, world!")
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error); 
    });
  
  checkStringLength("Hi")
    .then((message) => {
      console.log(message); 
    })
    .catch((error) => {
      console.log(error); 
    });

// Question 4 (codewars unsolved question)

/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
Note: In COBOL, it should return "found the needle at position 6"
*/

function findNeedle(array) {
    const index = array.findIndex((element) => element === "needle");
    return "found the needle at position " + index;
  }
  
  const haystack1 = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];
  console.log(findNeedle(haystack1)); 
  
  const haystack2 = ["hay", "junk", "hay", "hay", "moreJunk", "randomJunk", "needle"];
  console.log(findNeedle(haystack2)); 


// Question 5 (codewars solved question)

/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

*/

function sumTwoSmallestNumbers(numbers) {
    numbers.sort((a, b) => a - b);
  
    const sum = numbers[0] + numbers[1];
  
    return sum;
  }
  
  console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));                    
  console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));

