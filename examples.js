const products = [{
	id: 1,
	name: 'shirt',
	price: 500
}, {
	id: 2,
	name: 'Shoes',
	price: 2000
}, {
	id: 3,
	name: 'Pants',
	price: 1500
}];

const productsOnDiscount = products.map(product => {
	if (product.price < 1000) return product;

	return {
		...product,
		price: product.price * 0.9,
		big: 'gae'

	}
})


// create an array only containing the ids of the products
let idList = products.map(p => p.id)
//filtering cheap items
const isCheap = p => p.price < 1000
const isExpensive = p => !isCheap(p)
const cheapProducts = products.filter(isCheap)
const expensiveProducts = products.filter(isExpensive)
console.log('cheap:', cheapProducts, '\n\nexpensive:', expensiveProducts);

//cuanto gastas en comprar todos los productos baratos?

const numbers = [-2, 1]
const output = sortedSquaredArray(numbers)
console.log('output', output);

function sortedSquaredArray(array) {
	const sorted = array.sort(function(a, b) {
		return a - b
	})
	console.log(sorted)
	sortedSquared = sorted.map(n => n ** 2)
	return sortedSquared;
}
