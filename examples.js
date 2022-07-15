'use strict'

// const singleNumber = function(nums) {
// 	let map = new Map();
// 	for (let n of nums) {
// 		// map.set(n, map.get(n) ? map.get(n) + 1 : 1);
// 		// map.set(n, (map.get(n) ?? 0) + 1)
// 	}
// 	console.log(map);
//
// 	for (let [key, val] of map) {
// 		if (val === 1) {
// 			return key;
// 		}
// 	}
// };
//
// const a = [1, 1, 2, 2, 3, 3, 4, 4, 5]
// console.log(singleNumber(a));

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	let map = new Map()
	for (let n of nums) {
		map.set(n, map.get(n) + 1 || 1)
	}
	console.log(map);
	for (let [key, val] of map) {
		if (val === 1) {
			return key
		}
	}

};

let nums = [2, 2, 1, 3, 3, 4, 4, 5, 5, 6, 6]
console.log('answer:', singleNumber(nums));
