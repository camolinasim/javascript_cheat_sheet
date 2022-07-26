function containsDuplicates(array) {
	mySet = new Set(array)
	console.log(mySet);
	const hasDuplicate = mySet.size === array.length ? false : true
	return hasDuplicate
}

a = [1, 2, 3]
console.log(containsDuplicates(a));
