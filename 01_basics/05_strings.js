const name = "vishal"
const repocount = 50
console.log(typeof(repocount));

console.log(name + repocount + " chaudhary")

console.log(`hello my name is ${name} and my repocount is ${repocount}`);


const gameName = new String('Vishal Chaudhary')

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.toUpperCase())
console.log(gameName.indexOf('h'))
console.log(gameName.charAt(4))

const newstring = gameName.substring(0, 4)
console.log(newstring)

const anotherstring = gameName.slice(-4, 15)
console.log(anotherstring)

const newone = "     vishal chaudhary "
console.log(newone.trim())

const url = "https://vishal%20chaudhary.org"

console.log(url.replace('%20', '-'))

console.log(url.includes('vishal'))

