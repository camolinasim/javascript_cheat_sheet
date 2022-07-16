function classPhotos(redShirtHeights, blueShirtHeights) {
	// Write your code here.
	//sort your kids by smallest height (tiny guys first)
	let redKids = [...redShirtHeights].sort((a, b) => b - a)
	let blueKids = [...blueShirtHeights].sort((a, b) => b - a)

	console.log(redKids);

	// check if there's a kid with the same shirt and same height as another. If there is, return false.
	let isThereTwoRedKidsWithSameHeight = redKids.some((kidHeight, i) => kidHeight === redKids[i + 1])
	console.log('two red kids with same height?', isThereTwoRedKidsWithSameHeight);
	if (isThereTwoRedKidsWithSameHeight) return false

	let isThereTwoBlueKidsWithSameHeight = blueKids.some((kidHeight, i) => kidHeight === blueKids[i + 1])
	console.log('two blue kids with same height?', isThereTwoBlueKidsWithSameHeight);
	if (isThereTwoBlueKidsWithSameHeight) return false

	//find the tallest kid and determine whether he's wearing red or blue.
	const tallestRed = Math.max(...redKids)
	const tallestBlue = Math.max(...blueKids)
	const shirtColorInFrontRow = tallestRed > tallestBlue ? 'red' : 'blue'

	for (let i = 0; i < redShirtHeights.length; i++) {
		let redKidHeight = redKids[i]
		let blueKidHeight = blueKids[i]

		if (shirtColorInFrontRow === 'red') {
			if (redKidHeight >= blueKidHeight) return false //make sure that all the red kids are smaller than blue kids
			if (blueKidHeight >= redKidHeight) return false
		}

	}

	return true

}

const a = [5, 7, 1, 3, 4]
const b = [6, 9, 2, 4, 5]

const ans = classPhotos(a, b)
console.log('answer:', ans);
