// Advanced Objects

// let obj = {
//     name: 'ali'
// };


// Object.preventExtensions(obj); // no add , can update and delete 
// obj.age = 17;
// console.log(obj);
// console.log(Object.isExtensible(obj));



// Object.seal(obj); // no add and delete, can update
// obj["age"] = 17;
// console.log(obj);
// console.log(Object.isSealed(obj));




// Object.freeze(obj); // no add , no update and delete 
// obj.age = 17;
// delete obj.name;
// obj.name = "vali"
// console.log(obj);
// console.log(Object.isFrozen(obj));

// --------------------------------------------------------------------------

// setter / getter

// const obj = {
//     _password: "12345",

//     set getpassword(props){
//         if(props.length < 5){
//             console.log("siz yetarlicha qiymat kiritmadingiz");
//             return;
            
//         }
//     },

//     get getpassword(){
//         return this._password;
//     },
// }
// obj.getpassword = "8765"
// console.log(obj.getpassword);
