//return all duplicate values in a list
const a = [1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 7, 7, 8, 9, 9, 9, 9, 9, 9]

function returnDuplicates(arr) {
	let duplicateNumbers = []
	let map = new Map()
	a.forEach(n => map.set(n, map.get(n) + 1 || 1))
	for (let [key, value] of map) {
		if (value >= 2) duplicateNumbers.push(key)
	}
	return duplicateNumbers
}

console.log(returnDuplicates(a));
