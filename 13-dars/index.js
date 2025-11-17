let obj = {
    name: 'value',
}

// 1---

// let newobj = structuredClone(obj);

// 2---

let newobj = Object.assign({}, obj)
console.log(newobj.name);
