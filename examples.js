//return all duplicate elements and their indexes [[9,1],[9,2]]
duplicates = [9, 9, 9, 1, 2, 9]
indexOfDuplicates = []
console.log(duplicates.filter((n, i) => {
	if (n === 9) {
		indexOfDuplicates.push(i)
	}

	console.log(indexOfDuplicates);
	return n === 9
}))
