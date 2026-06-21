//const name = "tarush"
const age = 20

// console.log (name + age)    ***************   old way

// console.log(`my name is ${name} and my age is ${age}`)

const name = "tarush"
console.log(name[2])
//  output = r
console.log(name.length)
//  output = 6
console.log(name.toUpperCase())
//  output = TARUSH
console.log(name.indexOf('u'))
//  output = 3
console.log(name.charAt(1))
//  output = a


const newName = name.substring(0,4)
 const nextName = name.slice(-5,4)
console.log(newName)
//  output = taru , because string  the end index is exclusive so it will print (0,4)
console.log(nextName)
//  output = aru . t= -6 a= -5 ....h= -1 , golden rule string is exclusive will only pirnt(-5,3)

const work = "        Engineer       "
console.log(work.trim())
// will remove the space in the string
console.log(work.trimStart())
// will remove the space in the string from start
console.log(work.trimEnd())
// will remove the space in the string from End

const url = "https://singla@google.com"
console.log(url)
// output = https://singla@google.com
console.log(url.includes('singla'))
// output = true
console.log(url.replace('@' , '1'))
// output = https://singla1google.com 

