const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : "ruby",
    swift : "swift by apple"
}

// for(const key in myObject){
//     console.log(`${key} shortcut is for ${myObject[key]}`)
// }

// const programming = ["js", "c++", "rb", "java"]

// for(const key in programming){   // index return karta hai 
//     console.log(key)
//     console.log(programming[key])
// }

const map = new Map()  // map is not iterable 
map.set('IN, "india')
map.set('USA', "united states")
map.set('Fr', "france")

for(const key in map){
    console.log(key);  // kucch output nahi aayega 
}
// arrays ke liye generally for of loop lagate hain and 
// objects ke liye for in loop