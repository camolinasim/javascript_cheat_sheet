'use strict'

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
	// Write your code here.
	let sortedRedSpeeds = null
	let sortedBlueSpeeds = null
	let totalSpeed = 0
	let redTotalSpeed = redShirtSpeeds.reduce((accumulator, speed) => accumulator + speed, 0)
	let blueTotalSpeed = blueShirtSpeeds.reduce((accumulator, speed) => accumulator + speed, 0)
	let isRedTeamFaster = redTotalSpeed > blueTotalSpeed ? true : false

	if (fastest) {
		if (isRedTeamFaster === true) {
			sortedRedSpeeds = [...redShirtSpeeds].sort((a, b) => b - a)
			sortedBlueSpeeds = [...blueShirtSpeeds].sort((a, b) => a - b)
		} else {
			sortedBlueSpeeds = [...blueShirtSpeeds].sort((a, b) => b - a)
			sortedRedSpeeds = [...redShirtSpeeds].sort((a, b) => a - b)
		}


		for (let i = 0; i < sortedRedSpeeds.length; i++) {
			totalSpeed += Math.max(sortedRedSpeeds[i], sortedBlueSpeeds[i])
		}
	} else {
		//find the slowest team
		if (isRedTeamFaster) { //that means blue team is slower, so we sort them in reverse and the other on ascending
			sortedBlueSpeeds = [...blueShirtSpeeds].sort((a, b) => b - a)
			sortedRedSpeeds = [...redShirtSpeeds].sort((a, b) => b - a)
		} else {
			sortedBlueSpeeds = [...blueShirtSpeeds].sort((a, b) => b - a)
			sortedRedSpeeds = [...redShirtSpeeds].sort((a, b) => b - a)
		}
		for (let i = 0; i < sortedRedSpeeds.length; i++) {
			totalSpeed += Math.max(sortedRedSpeeds[i], sortedBlueSpeeds[i])
		}
		console.log('isRedTeamFaster:', isRedTeamFaster, 'red speeds: ', sortedRedSpeeds, 'blue speeds: ', sortedBlueSpeeds, 'total speed:', totalSpeed);

	}
	return totalSpeed
}

let red = [5, 4, 3, 2, 1]
let blue = [1, 2, 3, 4, 5]

console.log(tandemBicycle(red, blue, false));
