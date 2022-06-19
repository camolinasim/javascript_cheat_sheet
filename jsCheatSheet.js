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
console.log(priceArr);
