/*--Array--*/
// length
let arr = [1, 2, 3]

//multidimentions
let a = [
	[1, 2, 3],
	[1, 2, 3],
	[1, 2, 3]
]

//set a fixed size
let nItems = new Array(1000)

//fill an array with a the same value
nItems.fill(1)

//call a function on every item of the Array
nItems = Array.from({
	length: 1000
}, (_, i) => i + 1)
console.log(nItems, nItems.length)
