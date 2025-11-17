// OBJECT ----
// object chiqarish usullari :
// 1. let obj = {}
// 2. let obj2 = new object{}
// 3. let obj3 = object{}


// -------------------------------
// object ni 2 xil turi bor 

// let obj = {
//     ism:"Shoxjaxon",
//     familiya:"G'aybullayev"
// }


// console.log(Object.ism); -----(STATIC)

// let key = "familiya"
// console.log(obj["familiya"]); -----------(DINAMIC)

// ===============================================
// Object ni (for in) bilan ishlatish.

// let obj = {
//     ism:"Shoxjaxon",
//     familiya:"G'aybullayev",
//     yosh: 17
// }

// for (let key in obj) {
//     console.log(key , '=' , obj[key]);
    
// }

// ==================================================

let obj = {
    ism:"Shoxjaxon",
    familiya:"G'aybullayev"
}
let obj2 = {
    ism:"otabek",
    familiya:"valiyev"
}

let clone1 = structuredClone(obj2)
let clone2 = structuredClone(obj)

clone1.ism = NaN
clone2.ism = NaN

for (let key in clone2) {
    console.log(key , '=' , clone2[key]);
}
console.log("--------------------------------------------------------");

for (let key in clone1) {
    console.log(key , '=' , clone1[key]);
}