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

// array of objects
const objArr = [{
	name: 'John',
	'last name': 'Doe' //must be accessed as objArr[0]['last name']
}]

//get all indexes of an Array
const nameArr = ['john', 'paul', 'august'];
const allKeys = Array.from(nameArr.keys())

//get all values of an Array
const allValues = Array.from(nameArr.values())

//get all value-pair of an Array
const allKeyValuePairs = Array.from(nameArr.entries())

//toString an Array (USE ONLY WITH PRIMITIVE DATA TYPES)
stringified = nameArr.toString()

//toString but separated by a provided delimeter
nameArrWithDelimeter = nameArr.join(' - ')

//toString into correct currency money money
const priceArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
currencyList = priceArr.toLocaleString('en-US', {
	style: 'currency',
	currency: 'USD'
})

//add item to end of Array
priceArr.push(4, 4)

//add items to beginning of Array
priceArr.unshift(9, 9)

// remove item from end of  Array
removedFromEnd = priceArr.pop()
priceArr.pop()

//remove item from beginning of Array
removedFromBeginning = priceArr.shift()
priceArr.shift()

//remove item from specific index
priceArr.splice(4, 1, 'potato')
//whereToStart(removing/adding from), || if only this is set, it wil delete everything from the specified index, including the item at that position.
//howManyItemsToRemove,
//whatToAdd (must comma separated)

//join two arrays together (merge)
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, 9, 10]
let contatenated = [...arr1, ...arr2, 'abc'] //you can add more than 1, and they don't even have to be arrays

//copy an array
let copyArr1 = [...arr1] //makes a different array IF WORKING WITH PRIMITIVES. Shallow copy if working with objects (Changing one will change the other)

//copying an array with OBJECTS inside
const objects = [{
	n: 1
}, {
	n: 2
}, {
	n: 3
}, {
	n: 4
}]
const objectsCopy = JSON.parse(JSON.stringify(objects))

//While loop
for (let i = 0; i < arr1.length; i += 1) {
	console.log('val', arr1[i]);
}

//reverse while loop
for (i = arr1.length - 1; i >= 0; i -= 1) {
	console.log('val', arr1[i]);
}



//loop in reverse
// for (let j = arr1.length; j <= 0; j -= 1) {
// 	console.log('val:', arr1[j]);
// }
