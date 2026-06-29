const userEmail = [];


if(userEmail){
    console.log("got user email");

}

else{
    console.log("don't have user enmail")
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if(userEmail.length == 0){
    console.log("Array is empty")
}

const emptyObj = {};

if(Object.keys(emptyObj).length == 0){
    console.log("object is empty")
}

// Mullish Coalescing Operator (??): null undefined

let val;
// val1 = 5 ?? 10 // 5 dega 

// val2 = null ?? 10 // 10 dega 

// val1 = undefined ?? 15 // 15 dega

val1 = null ?? 10 ?? 20 // 10 dega

console.log(val1);

// Ternary Operator
// condition ? true : false