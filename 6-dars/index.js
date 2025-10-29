// && - and - va 

// (Bu operator faqat false ni qidiradi)

// console.log(true && false); = false

// ==============================================

//< ! >- not - inkor 

// console.log(!0);  = true  

// (bu belgi true ni false false ni true qilib beradi)

// -----------------------------------------------

// ?? - nullish 
// null va undefined dan tashqari hamma malumotni true deb biladi va bu operator true ni qidiradi 
// console.log(null ?? false);  = false

// ===========================================================================


// if , else , else if

// buni biz saytlarda tekshiruv uchun ishlatamiz
//  masalan odamning yoshi 18 yoki 18 dan katta bolsa kirishga ruxsat beradi


// let age = prompt("Yoshingizni kiriting")

// if (age >= 18){
// console.log("ruxsat");
// } else{
//     console.log("mumkin emas");
// }


// ----------------------------------

// let age = prompt("yoshingizni kiriting")

// if (age >= 3 && age <= 6){
//     console.log("Maktabgacha talim");
    
// }


// else if (age >= 7 && age <= 17){
//     console.log("Maktab oquvchisi");
    
// }

// else if (age >= 18 && age <= 30){
//     console.log("universitet talimi");
    
// }

// else if (age >= 31 && age <= 49){
//     console.log("ishlaydi");
    
// }

// else if (age >= 60 && age <= 100){
//     console.log("nafaqa oladi");
    
// }
// else{
//     console.log("chol");
// }

// =========================================================================

// let name = prompt("mashina markasini kiriting")

// if (name === "damas" || name === "nexia" || name === "cobalt" || name === "malibu" || name === "spark" || name === "gentra"){
//     console.log("GM autos");
    
// }


// else if (name === "supra" || name === "camry" || name === "corolla" || name === "prado"){
//     console.log("TOYOTA autos");
    
// }

// else if (name === "bmw i118" || name === "bmw m5" || name === "bmw m4" || name === "bmw m8"){
//     console.log("BMW autos")
    
// }

// else if (name === "cls 63" || name === "cls 300" || name === "cls 350" || name === "maybach"){
//     console.log("Mercedes Benz autos");
    
// }

// else{
//     console.log("Mashina haqida malumot topilmadi");
// }

// ====================================================================


// let place = prompt("shahar nomini yozing")

// if (place === "california" || place === "new york" || place === "arizona" || name === "washington"){
//     console.log("USA");
    
// }


// else if (place === "tashkent" || place === "namangan" || place === "samarqand" || place === "buxoro"){
//     console.log("Uzbakistan");
    
// }

// else if (place === "moskva" || place === "krim" || place === "vladivostok" || place === "sank-peterburk"){
//     console.log("Russia")
    
// }

// else if (place === "london" || place === "manchester" || place === "liverpool" || place === "lecter"){
//     console.log("England");
    
// }

// else{
//     console.log("Shahar haqida malumot topilmadi");
// }

// =========================================================================================

// let lesson = prompt("Mavzu nomini yozing")

// if (lesson === "style" || lesson === "class" || lesson === "img" || lesson === "atribute"){
//     console.log("HTML");
    
// }


// else if (lesson === "flex" || lesson === "grid" || lesson === "z-index" || lesson === "background"){
//     console.log("CSS");
    
// }

// else if (lesson === "primitives" || lesson === "git" || lesson === "variable" || lesson === "operations"){
//     console.log("JavaScript")
    
// }


// else{
//     console.log("mavzu haqida malumot topilmadi");
// }