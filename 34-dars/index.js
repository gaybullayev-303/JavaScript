// //CLASSES 
// class Parent{
//     static name = 'ali';
//     constructor
// }

// let obj = new Parent();



// =========================================
//  OOP - Object Oriented Program

class Parent {
    constructor(name) {
        this.pname = name;
    }
    getparent() {
        console.log(this.pname);
    }
}
let obj1 = new Parent("eshmat");
// -------------------------------------------------
class Child extends Parent {
    constructor(name) {
        super(name);

        this.cname = name;
    }
    getchild() {
        console.log(this.cname);
    }
}
let obj2 = new Child("gulmat")
obj2.getchild();
obj2.getparent();

// -------------------------------------------------
// class Child{
//     constructor(name){
//         this.name = name;
//     }
//     getchild (){
//     console.log(this.name);
//     }
// }
// let obj2 = new Child("gulmat")