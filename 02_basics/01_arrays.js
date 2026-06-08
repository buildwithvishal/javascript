const myArr = [0, 1, 2, 3, "hitesh"]

const heroes = ["ironman", "spiderman"]

const myArr2 = new Array(2,3,6)

// console.log(myArr2)

// Array Methods

// myArr.push(6)
// myArr.push(456)

// console.log(myArr)
// myArr.pop();

// myArr.unshift(18)
// myArr.shift()
// myArr.shift()

// const newArr = myArr.join()
console.log(myArr);
// console.log(newArr)
// console.log(typeof(newArr))

// slice original array ko manipulate ya chaneg nahi karta splice original array ko change kar deta hai 
const myn1 = myArr.slice(1,3) // 3rd index not included
console.log(myn1);
console.log(myArr);
const myn2 = myArr.splice(1,3) // 3rd index included

console.log(myn2);
console.log(myArr);