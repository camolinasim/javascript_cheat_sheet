//DOM Manipulation
//get element by id
const secondLi = document.getElementById('second-li')

//get elemenet by css selector (returns the first one that matches  )
const firstLi = document.querySelector('li')

//get all elements that match a css selector (returns an iterable)
const listItems = document.querySelectorAll('li')

//functions you can call after using querySelectorAll
listItems.length
listItems.forEach(li => {
	console.log(li)
})
//to use map after querySelector - convert an iterable into an array
Array.from(listItems)
	.map(li => {
		console.log(li);
	})

//get elements by classname
const listItems = document.getElementsbyClassname('list-item')

//get elements by tagname
const listItems2 = document.getElementsByTagName('li') //not recommended

//apply styles to an element from a query selector iterable
listItems[0].style.color = 'red' //can change any css property

//change text of an element returned from a query selector iterable
listItems[0].textContent = 'something'

//set attribute of an element returned from query querySelector
listItems[0].setAttribute('class', someClassName)

//add class of element returned from query querySelector
listItems[0].className = 'someClass'

//delete/remove class of element returned from query querySelector
listItems[0].classList.remove('someClassName')

//turn a class on or off
listItems[0].classList.toggle('className')
