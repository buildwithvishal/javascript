//Immediately Invoked Function Expressions (IIFE)


// named IIFe
(function chai(){
    console.log(`DB connected`)
})(); // doosri baar iife use karne ke liye pehle function ko end karne ke liye ";" use karte hain  
// global scope ke pollution se problem hoti hai kayi baar toh uss pollution ko hatane ke liye humne IIFE ka use kiya  

// ()() 

//unnamed IIFE
( (name) =>{
    console.log(`DB connected Two ${name}`)
})("vishal")