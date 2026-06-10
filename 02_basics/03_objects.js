// singleton 
// jab bhi hum literals i tarah declare karte hian tab singleton nahi banta constructor ki tarah karte hain tab banta hai 

// object literate 

const mySym = Symbol("key1")

const jsUser = {
    name : "Vishal", //name ka type string hai 
    "full name" : "vishal Chaudhary", //yahan bhi full name ka type string hai 
    age :18,
    [mySym] : "Mykey1", //agar squary bracket nahi lagayene toh iska type bhi string aayega lekin ab iska type symbol hai 
    location : "bhopal",
    email: "vishal@google.com",
    isLoggedin: false,
    lastLogindays : ["monday", "tuesday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

jsUser.email = "vishal@chatgpt.com";
// Object.freeze(jsUser);
jsUser.email = "vishalamazon@25";

// console.log(jsUser)


jsUser.greeting = function(){
    console.log("hello vishal Chaudhary")
}

jsUser.greeting2 = function(){
    console.log(`hello js user ${this.name}`)
    console.log(`hello js user ${this["full name"]}`)
}


console.log(jsUser.greeting());
console.log(jsUser.greeting2())

