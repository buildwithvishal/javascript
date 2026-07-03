const coding = ["cpp", "java", "ruby", "python"]

// coding.forEach(  function (item){
//     console.log(item);
// })

// coding.forEach( (item) =>{
//     console.log(item);
// })


// coding.forEach( (item, index, arr)=>{
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName : "javascipt",
        languageFileName : "js",

    },
    {
        languageName : "java",
        languageFileName : "java"
    },

    {
        languageName : "python",
        languageFileName : "py"
    }
    
]

myCoding.forEach( (item) =>{
    console.log(item.languageName);
})