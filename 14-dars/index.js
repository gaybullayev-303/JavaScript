// let student = {
//   firstName: "Eshmat",
//   lastName: "Toshmatov",
//   age: 20,
//   course: "Frontend"
// };

// delete student.course

// console.log(student);


// ----------------------------------------------------------

// let data = {
//   name: "Phone",
//   model: "iPhone",
//   price: 700,
//   quantity: 8,
//   getName: function(price , quantity){
//     console.log(price * quantity);
//   }
// };

// data.getName(700 , 8)

// ---------------------------------------------------

let user = {
  id: 1,
  name: "Eshmat",
  age: 65,
  status: "Nafaqa oluvchi",
  child: {
    id: 2,
    name: "Toshmat",
    age: 30,
    Status: "Talaba",
  }
}
console.log(user);


let Cloneuser1 = user
user.child.age = 45;
console.log(Cloneuser1);