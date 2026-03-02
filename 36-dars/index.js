CURRY FUNCTION

--DINAMIC-------

function GetSum(a){
return (b) => {
    if(b) {
        return GetSum(a + b)
    }
    return a;
}

};

console.log(GetSum(1)(2)(3)(4)(5)());

--STATIC--------

function getSum(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        };
    };

}

console.log(getSum(1)(2)(3));