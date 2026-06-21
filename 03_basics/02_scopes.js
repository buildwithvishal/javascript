let a = 300;

if(true){
    let a = 10;
    const b = 52;
    // console.log("inner:", a)
}

// console.log(a);

//inspect karke console me jo scope hota hai woh alag hota hai or code environment node me scope alag hota hai 

function one(){
    const username = "vishal"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);

    two();
}

// one();


if(true){
    const username = "vishal";
    if(username == "vishal"){
        const website = " youtube"
        // console.log(username+website);
    }

    // console.log(website);
}

// console.log(username)


//++++++++++++ interesting ++++++++++

console.log(addone(5)); // koi error nahi dega 
function addone(num){
    return num+1;
}


console.log(addtwo(5)); // error dega kyunki jis function ko 
// hum call karna chahte hai usse hamne ek variable me hold
// kar diya hai and woh variable abhi tak declare nahi hua(hoisting)
const addtwo = function(num){
    return num+2
}

