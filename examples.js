function isPalidrome(string) {
	let reversed = string.split('')
		.reverse()
		.join('')
		.toLocaleLowerCase()
	let original = string.split('')
		.join('')
		.toLowerCase()

	reversed = removeWhiteSpace(reversed.split(''))
	original = removeWhiteSpace(original.split(''))



	console.log(reversed);
	console.log(original);

	return reversed === original
		.toLowerCase()

}

a = "A man, a plan, a canal: Panama"
console.log(isPalidrome(a));

function removeWhiteSpace(s) {
	for (let i = 0; i < s.length; i++) {
		if (s[i] === ' ') s.splice(i, 1)
	}
	return s.join('')
}
