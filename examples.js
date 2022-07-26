function containsDuplicates(array) {
	mySet = new Set(array)
	console.log(mySet);
	const hasDuplicate = mySet.length === array.length ? false : true
	return hasDuplicate
}

a = [1, 2, 1, 2, 1, 2, 1, 5, 4, 5, 4, 5, 4, 5]
console.log(containsDuplicates(a));
