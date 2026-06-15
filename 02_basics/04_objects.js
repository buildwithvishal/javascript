// const tinderrUser = new Object() // ye singleton object hai 
const tinderUser = {} // ye singleton object nahi hai 
tinderUser.id = "1256khjk"
tinderUser.name = "vishal"
tinderUser.isLoggedin = false

// console.log(tinderUser)

const regulaUser = {
    email : "some@mail.com",
    fullname : {
        userfullname : {
            firstname : "Vishal",
            lastname: "chaudhary"
        }
    }
}


// console.log(regulaUser.fullname.userfullname.lastname);

const obj1 = {1:"a", 2: "b"}

const obj2 = {3:"c", 4: "d"}

// const obj3 = {obj1, obj2}
// console.log(obj3)

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3)

// array of objects, jab database se values aati hain tab use karte hain 
const users = [
    {
        id:1,
        email:"gwhduhdu@2165",
    },

    {
        id : 2,
        email : "vedhj@225453"
    },
    
    {
        id : 3,
        email : "vhdgfwhghj@225453"
    }
]

console.log(users[1].email)
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLogggse'))

