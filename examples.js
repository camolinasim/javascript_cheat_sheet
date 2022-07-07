// // const products = [{
// // 	id: 1,
// // 	name: 'shirt',
// // 	price: 500
// // }, {
// // 	id: 2,
// // 	name: 'Shoes',
// // 	price: 2000
// // }, {
// // 	id: 3,
// // 	name: 'Pants',
// // 	price: 1500
// // }];
// //
// // const productsOnDiscount = products.map(product => {
// // 	if (product.price < 1000) return product;
// //
// // 	return {
// // 		...product,
// // 		price: product.price * 0.9,
// // 		big: 'gae'
// //
// // 	}
// // })
// //
// //
// // // create an array only containing the ids of the products
// // let idList = products.map(p => p.id)
// // //filtering cheap items
// // const isCheap = p => p.price < 1000
// // const isExpensive = p => !isCheap(p)
// // const cheapProducts = products.filter(isCheap)
// // const expensiveProducts = products.filter(isExpensive)
// // console.log('cheap:', cheapProducts, '\n\nexpensive:', expensiveProducts);
// //
// // //cuanto gastas en comprar todos los productos baratos?
// //
// // const numbers = [-2, 1]
// // const output = sortedSquaredArray(numbers)
// // console.log('output', output);
// //
// // function sortedSquaredArray(array) {
// // 	const sorted = array.sort(function(a, b) {
// // 		return a - b
// // 	})
// // 	console.log(sorted)
// // 	sortedSquared = sorted.map(n => n ** 2)
// // 	return sortedSquared;
// // }
//
// // let a = new Array(100)
// // 	.fill(0)
// // 	.map((initialValue, index) => initialValue + index)
// // console.log(a);
// //
// // [first, second, third, ...rest] = a
// // console.log(first, second, third, rest);
//
// // console.log(' ' ?? 'shit');
//
// function isMonotonic(array) {
// 	// Write your code here.
// 	//big gay
// 	//toma el array
// 	//sortea de menor a mayor (non-descending) y guardalo
// 	if (array.length === 0 || array.length === 1) return true
// 	let nonDescending = [...array].sort((a, b) => a - b)
// 	// console.log(array[4], nonDescending[4]);
//
//
// 	//sortea de mayor a menor (non-ascending) y guardalo
// 	let nonAscending = [...array].sort((a, b) => b - a)
// 	console.log('original', array, 'nonAscending', nonAscending, 'nonDescending', nonDescending);
//
//
// 	//si el array es igual a alguno de esos, entonces es non-ascending o non-descending
// 	let areEqual = true
// 	for (let i = 0; i < array.length; i++) {
// 		if (array[i] !== nonDescending[i]) {
// 			areEqual = false
// 			// console.log('array[i]:', array[i], 'nonDescending[i]:', nonDescending[i], 'areEqual:', areEqual);
// 		}
// 	}
//
// 	if (areEqual) return areEqual
// 	areEqual = true
// 	for (let i = 0; i < array.length; i++) {
// 		console.log('array[i]:', array[i], 'nonAscending[i]:', nonAscending[i], 'areEqual:', areEqual);
//
// 		if (array[i] != nonAscending[i]) {
// 			areEqual = false
// 		}
// 	}
// 	return areEqual
//
//
// 	//si no es igual, tonces big ultra doble triple gayh
// }
//
// input = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
//
// console.log(isMonotonic(input));

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var romanToInt = function(s) {
// 	//make a list of when I, X and C can be read as subtractions
// 	const valueMap = {
// 		I: 1,
// 		V: 5,
// 		X: 10,
// 		L: 50,
// 		C: 100,
// 		D: 500,
// 		M: 1000
// 	}
//
//
// 	const iSubtractCases = ['V', 'X']
// 	const xSubtractCases = ['L', 'C']
// 	const cSubtractCases = ['D', 'M']
// 	let sum = 0
//
// 	let romanNumeral = Array.from(s)
//
// 	romanNumeral.forEach((character, i) => {
// 		let nextCharacter = romanNumeral[i + 1]
//
// 		switch (character) {
// 			case 'I':
// 				//check if the next character is in ISubtractCases. If it is, subtract it from sum. Otherwise, add it to sum.
// 				if (iSubtractCases.includes(nextCharacter)) sum -= valueMap.I
// 				else sum += valueMap[character]
// 				break;
// 			case 'X':
// 				if (xSubtractCases.includes(nextCharacter)) sum -= valueMap.X
// 				else sum += valueMap[character]
//
// 				break;
// 			case 'C':
// 				if (cSubtractCases.includes(nextCharacter)) sum -= valueMap.C
// 				else sum += valueMap[character]
// 				break;
// 			default:
// 				sum += valueMap[character]
// 		}
// 		// console.log(sum);
// 	})
//
//
// 	return sum
//
// };
// romanToInt('III')

//return first repeated character in string
//
// function firstRepeatedCharacter(s) {
// 	let userInput = Array.from(s)
// 	let seenCharacters = []
// 	let repeatedCharacter = ''
// 	let currentCharacter = ''
// 	for (let i = 0; i < userInput.length; i++) {
// 		currentCharacter = userInput[i]
// 		if (seenCharacters.includes(currentCharacter)) {
// 			repeatedCharacter = currentCharacter
// 			return repeatedCharacter
// 		} else seenCharacters.push(currentCharacter)
// 	}
// }
//
//
// a = firstRepeatedCharacter('aacc')
// console.log(a);
//
// function isValidSubsequence(array, sequence) {
// 	const subSequence = []
// 	for (item of array) {
// 		if (sequence.includes(item)) {
// 			subSequence.push(item)
// 		}
// 	}
// 	return sequence.every((item, index) => item === subSequence[index])
// }
//
// console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
// 'use strict'
//
//
// function tournamentWinner(competitions, results) {
// 	let scoreTable = {}
// 	let roundWinner = null
// 	let isHomeWin = null
// 	let listOfTeams = competitions.flat(1)
//
// 	//create a hashtable with the names of each team and their value initialized to 0
// 	listOfTeams.forEach((item, i) => {
// 		scoreTable[item] = 0
// 	});
//
// 	//for each element of competitions
// 	competitions.forEach((item, i) => {
// 		//check which of the two teams won
// 		isHomeWin = results[i]
// 		if (isHomeWin) roundWinner = competitions[i][0]
// 		else roundWinner = competitions[i][1]
//
// 		//record the winner in hashtable
// 		scoreTable[roundWinner] += 3
//
// 	});
//
// 	let arr = Object.values(scoreTable);
// 	let max = Math.max(...arr);
//
// 	//return the highest value in hashtable
//
// 	return Object.keys(scoreTable)
// 		.find(team => scoreTable[team] === max);
// }
//
//
// const competitions = [
// 	["HTML", "C#"],
// 	["C#", "Python"],
// 	["Python", "HTML"]
// ]
//
// const results = [0, 1, 0]
//
// const a = tournamentWinner(competitions, results)
// console.log('Tournament Winner:', a);

'use strict'

//
// function findClosestValueInBst(tree, target) {
// 	// Write your code here.
// 	let closestValue = tree.root
// 	//look at root. If target is greater than root, go right. Otherwise, go left
// 	while
// 	if (target > tree.root) closestValue =
// }
//
// // This is the class of the input tree. Do not edit.
// class BST {
// 	constructor(value) {
// 		this.value = value;
// 		this.left = null;
// 		this.right = null;
// 	}
// }
//
// // Do not edit the line below.
// exports.findClosestValueInBst = findClosestValueInBst;
