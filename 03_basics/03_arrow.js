const user = {
    username : "vishal",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} ,  welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();
// console.log(this);

// function chai(){
//     let username = "vishal"
//     console.log(this.username); // undefined dega, this ka ye context hum objects ke andar hi use kar sakte hain functions ke andar nahi

// }

// chai();

// const chai = function(){
//     let username = "vishal"
//     console.log(this.username);
// }

// const chai = () =>{
//     let username = "vishal"
//     console.log(this.username);
//     console.log(this);
// }

// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }


// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2);// curly braces ka use karenge toh return keyword likhna padega if nahi karenge toh nahi likhna padega 

// jab return lagana pade toh usse bolte hain implicit return 
//or jab na lagana pade toh explicit return

const addTwo = (num1, num2) => ({username: "vishal"}) // object return karne ke liye parenthesis ko use karna hi padeaga warna undefined de dega

console.log(addTwo(2, 2));

 