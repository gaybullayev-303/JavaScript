// data type - ma'lumot turi
// 


// 1. Primitive :
// 1.1 - string : "ali" '324342'   `salom`
// 1.2 - number : +- 2**53,  1,2,3,4,5,6,7,8,9        (biz biladigan tasavur qila oladigan raqamlar)
// 1.3 - bigint : 900719924740993n = 2**53 + 1      (katta raqamlarga aytiladi)
// 1.4 - boolean : true, false
// 1.5 - symbol : bir-biriga oxshamas data yasab beradi
// 1.6 - null : yoq malumot                                  (ozimiz kiritamiz)
// 1.7 - undefined : yoq malumot                        (kompyuterni ozi chiqarib beradi)

// ============================================================================================================================
 

// non primitivlarda agar ular taqqoslansa ularni ichidagi qiymatlari bir xil bolsa ham ularni linklari boshqa boshqa
// bolgani uchun doim (false) chiqarib beradi !


// let obj1 = {
// name: "Ali",
// age: 20,
// }

// let obj2 = {
// name: "Ali",
// age: 20,
// }

// console.log(obj1 === obj2); = (false)


// 2. Non primitive 
// object = ( object, array, function )

// 2.1 - object : {key: value , key2 : value2}
// let data = {name: ali , age: 20};

// 2.2 - array : [hohlagan narsa yozish mumkin!]

// 2.3 - function :  (3 xil boladi)

//  1. function xisobla1 () {}
// xisobla1();


// 2. let xisobla2 = function() {}
// xisobla2();

//  let xisobla3 = () => { console.log(100 - 20)}
// xisobla3();