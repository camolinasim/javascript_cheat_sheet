function classPhotos(redShirtHeights, blueShirtHeights) {
	// Write your code here.
	//sort your kids by smallest height (tiny guys first)
	let redKids = [...redShirtHeights].sort((a, b) => b - a)
	let blueKids = [...blueShirtHeights].sort((a, b) => b - a)
	let isEveryRedKidTaller = false
	let isEveryBlueKidTaller = false

	console.log('red', redKids);
	console.log('blue', blueKids);

	//find the tallest kid and determine whether he's wearing red or blue.
	const tallestRed = redKids[0]
	const tallestBlue = blueKids[0]
	const shirtColorInFrontRow = tallestRed > tallestBlue ? 'red' : 'blue'
	console.log(shirtColorInFrontRow);

	if (shirtColorInFrontRow === 'red')
		isEveryRedKidTaller = redKids.every((redHeight, i) => redHeight > blueKids[i])

	else
		isEveryBlueKidTaller = blueKids.every((blueHeight, i) => blueHeight > redKids[i])


	return isEveryBlueKidTaller || isEveryRedKidTaller

}

const blue = [6, 9, 2, 4, 5]
const red = [5, 8, 1, 3, 4]

const ans = classPhotos(red, blue)
console.log('answer:', ans);
