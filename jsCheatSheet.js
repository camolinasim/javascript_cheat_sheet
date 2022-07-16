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

//fill/populate an array with a the same value
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

//get all value pair of an Array
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

//add/append item to end of Array
priceArr.push(4, 4)

//add/append items to beginning of Array
priceArr.unshift(9, 9)

// remove item from end of  Array
removedFromEnd = priceArr.pop()
priceArr.pop()

//remove item from beginning of Array
removedFromBeginning = priceArr.shift()
priceArr.shift()

//remove item from specific index - remove element from end of array
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

//copying an array with OBJECTS inside //copy an object
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

//for loop
for (let i = 0; i < arr1.length; i++) {

}

//reverse while loop
for (let i = arr1.length - 1; i >= 0; i--) {

}

//loop over values (for of/loop of)
for (let val of arr1) {

}

//break loop over a condition
for (let val of arr1) { //careful with in/of. In gives you index, of gives you value
	if (val % 2) continue;

}

//GOTO WAY TO LOOP AN ARRAY (when you don't need to break in the middle)
// arr1.forEach(val => log('val', val))

//Iterating over an iterator (with a while loop)
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const iter = arr.entries()
let val = iter.next()
while (!val.done) {
	val = iter.next()
}

//same but with a for loop
for (let val of arr.entries()) {

}

//loop in reverse
// for (let j = arr1.length; j <= 0; j -= 1) {

// }

//find the index of an item in the array (first occurance)
let coffeArray = [7, 4, 5, 3, -1, -7, 9, 8, 9]
let index = coffeArray.indexOf(9) // returns -1 if it doesn't find the value

// find index of item in array (last occurance)
index = coffeArray.lastIndexOf(9)

//find index of item in array of objects
a = {
	n: 1
}
b = {
	n: 2
}
c = {
	n: 4
}
arrayOfObjects = []
arrayOfObjects.push(a, b, c)
let foundItem = arrayOfObjects.indexOf(c)

// check if array contains/includes a value
includes4 = coffeArray.includes(4) //returns true/false

//find object in array
foundObject = arrayOfObjects.find(o => o.n === 2) //returns as soon as it finds first match. Returns undefined if no match

//find index of object in array
foundObjectIndex = arrayOfObjects.findIndex(o => o.n === 2)

// find/filter all occurrences of an item in array
let allNines = coffeArray.filter(n => n === 9)

//check if all items on an array meet a certain condition/criteria
criteria = s => s.selected === true
const selectionArr = [{
		selected: true
	},
	{
		selected: false
	},
	{
		selected: true
	},
]

let meetsCriteria = selectionArr.every(_ => {
	return criteria
})

//	check if at least one item in the list meets a certain criteria
atLeastOneMeetsCriteria = selectionArr.some(s => s.selected === false)

//change dimentions of an array (flatten)
const multiArr = [

	[
		[1],
		[2],
		[3]
	],
	[
		[
			[4],
			[5],
			[6]
		]
	],
	[
		[
			[7],
			[8],
			[9]
		]
	]
]


flattened = multiArr.flat(3)

//flatmap - filtering and flattening a multidimentional array
const nArr = [
	[1, 3, 4, 1],
	[3, 1, 6, 2],
	[4, 9, 0, 1]
];

flatmapped = nArr.flatMap(a => a.slice(0, 2))

const numeritos = [-7, 2, -34, 8, 23]

//reverse an array without modifying original array
reversed = [...numeritos].reverse();

// sort an array in ascending order without modifying original array
sortedNumbers = [...numeritos].sort((a, b) => a - b)

// sort an array in descending order without modifying original array
sortedDescending = [...numeritos].sort((a, b) => b - a)

//restructuring an array
const [first, second, ...rest] = numeritos

//restructuring an object | destructuring an object
const order = {
	name: 'cafeAmericano',
	flavor: 'dark',
	price: 40,
	rating: '7/10',
	nestedValue: {
		something: 'im a nested value',
		somethingElse: 'im another nested value'
	}
}

const {
	name,
	rating,
	nestedValue: { //you can also select nested values
		somethingElse
	},
	...restOfOrder
} = order

//sort an array by alphabetical order (and ignore capitals +  special characters like á é í )
const stringArray = ['Zazu', 'hiena', 'elefante', 'jirafa']
sortedStringArray = [...stringArray].sort((a, b) => a.localeCompare(b))

// find max in object /find min in hashtable
let obj = {
	a: 4,
	b: 0.5,
	c: 0.35,
	d: 5
};
let arrr = Object.values(obj);
let min = Math.min(...arr);
let max = Math.max(...arr);

//find key by value in object
function getObjKey(obj, value) {
	return Object.keys(obj)
		.find(key => obj[key] === value);
}

//convert object to key value array
let vgmSongList = {
	title: 'maybe',
	fairyFlying: 'maybe',
	house: 'maybe',
	kokiryForest: true,
	lostWoods: true,
	fairyFountain: true,
	shop: true,
	shootingGallery: 'maybe',
	kakarikoVillage: true,
	songOfStorms: true,
	lonLonRanch: true,
	zorasDomain: true,
}

const vgmKeyValueArray = Object.entries(vgmSongList);

// return a subset of an array / return a portion of an array
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
fromIndexToEnd = animals.slice(3) //duck, elephant
fromIndexToIndex = animals.slice(2, 4) //camel, duck (end not included)

//combine two objects
const personOne = {
	name: 'Kyle',
	age: 24,
	addres: {
		city: 'somewhere',
		state: 'one of them'
	}
}

const personTwo = {
	age: 32,
	favoriteFood: 'watermelon'
}

const personThree = { //take everything inside of personOne, then everything inside personTwo and override personOne.
	...personOne,
	...personTwo
}

//practical use of destructuring for passing function arguments
function printNameAndAge({
	name,
	age
}) {
	// log(`name: ${name}, age: ${age}`);
}

printNameAndAge(personThree)

//map methods
let sherlock = {
	name: 'Sherlock'
}
let watson = {
	name: 'Watson'
}

//create a map
let characters = new Map();
//add element to map
characters.set(sherlock, 'detective')
characters.set(watson, 'doctor')

//return an element from map | retrieve element from map | get element from map

console.log(characters.get(sherlock), characters.get(watson));

//iterating over map
for (let [key, value] of characters) {
	// if(value === something)
	// return key
}

//sort ascending/descending on condition | ternary operator
// array.sort((a,b) => condition ? a-b : b-a)
