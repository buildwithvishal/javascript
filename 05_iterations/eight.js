const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc, currval){
//     console.log(`acc : ${acc} and currval : ${currval}`)
//     return acc + currval
// }, 0)



const myTotal = myNums.reduce( (acc, curr)=> acc+curr, 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName : "mobile dev course",
        price : 5999
    },
    {
        itemName: "python couse",
        price : 2999
    },
    {
        itemName: "data science couse",
        price : 12999
    },
]

const priceTopay = shoppingCart.reduce( (acc, item) => acc+item.price, 0)
console.log(priceTopay)