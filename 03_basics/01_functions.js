function myName(){
    console.log("vishal")
}

// myName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

// addTwoNumbers(3, 4);   // 7
// addTwoNumbers(3, "4"); // 34
// addTwoNumbers(3, "a"); // 3a
// addTwoNumbers(3, null) // 3

function addTwoNumbers(number1, number2){
    let result = number1 + number2;
    return result;
}
 

// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result)


function loginUserMessage(username = 'sam'){
    if(!username){
        console.log("please enter a username");
        return;
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage())
 

function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

console.log(calculateCartPrice(200, 300, 400,5000,))