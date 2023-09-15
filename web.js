// // callback, promises, callback hell, object/array destructuring
// // class(inheritance)
// // important for API calls
// // Async & Await


// console.log("joseph");
// console.log("Dr Uche");
// console.log("Oga Kingdom");

// // call hell

// setTimeout(() => {
//  console.log("joseph")
//  setTimeout(() => {
//   console.log("Dr Uche")
//   setTimeout(() => {
//    console.log("Oga kingdom")
//   }, 3000)
//  }, 1000)
// }, 2000)


// // Promise 

// function Persons(name, password) {
//  return new Promise ((resolve, reject) => {
//   if(name) {
//    console.log(name)
//    resolve()
//   }else {
//    console.log("Invalid name or password")
//    reject()
//   }
//  })
// }

// call a promise function

// let person1 = Persons("Joseph", 1234)
// .then("Isaac", 7891)
// .then("favour", 3492)
// .catch((error) => console.log(error))


// arrays and Object

// how do define Array

// let names = [
//  "joseph",
//   "james", 
//   "gloria",
//   "victoria",
//    {
//     name: "jude", 
//     age: 23 
//    },
//    ["mango", "orange"]
//     ]  //  Array


    
// let value1 = names[5][1]
  
// console.log(value1)

// how to define object



// let allFruits = person["fruits"] 
// let person1 = person["fruits"][1]
// console.log(allFruits, person1)
// Methods for Arrays and Object

// classes 

// how do define class

// class User {
//  constructor(myName, myPassword) {
//   this.name = myName,
//   this.password = myPassword
//  }

//  printName() {
//   let username = `
//   Your full name: ${this.name} and password: ${this.password}`
//   console.log(username)
//  }
// }

// let user1 = new User("james", 1234)

// console.log(user1.printName())

// // Inheritance 

// class UserDetail extends User{
//  constructor(Name, Password, course) {
//   super()
//   this.myName = Name
//   this.course = course
//   this.myPassword = Password
//  }

//  UserMenu() {
//   let user = `
//   Username: ${this.myName}
//   Password: ${this.myPassword}
//   Course: ${this.course}
//   `;
//   console.log(user)
//  }
// }

// let userDetail1 = new UserDetail("joseph", 1234, "javascript")

// console.log(userDetail1.UserMenu())

// // object and Array destructuring

// const fruits = ["orange", "mango", "apple", "pineapple"]

// // let fruit1 = fruits[0]
// // let fruit2 = fruits[1]
// // let fruit3 = fruits[2]

// let [fruit1, fruit2, fruit3, fru] = fruits

// console.log(fruit1, fruit2, fruit3, fru);

// // object destructuring

// let person = {
//  Name: "joseph",
//  age: 25,
//  hobbies: {
//   hobby1: "coding",
//   hobby2: "relaxing"
//  },
//  salary: {
//   sal1: 20,
//   sal2: 30,
//   sal3: 50
//  }
// }

// let {Name, age,hobbies, salary} = person

// console.log(Name, age, hobbies.hobby2, salary.sal3)


// todo Functions

