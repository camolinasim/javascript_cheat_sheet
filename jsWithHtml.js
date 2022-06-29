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

//set attribute of an element returned from querySelector
listItems[0].setAttribute('class', someClassName)

//add class of element returned from querySelector
listItems[0].className = 'someClass'

//delete/remove class of element returned from querySelector
listItems[0].classList.remove('someClassName')

//turn a class on or off
listItems[0].classList.toggle('className')

//create element
const p = document.createElement('p')
p.textContent = 'hello world'

//adding an element to the DOM/body/page (at the beginning)
document.body.appendChild(p)
//alternatively: document.body.append(p)

//adding elemenet to the end of the body
document.body.preprend(p)
// alternatively: document.body.innerHTML += '<p>something</p>' DONT USE THIS

//clear an entire element/ clear the entire body
document.body.innerHTML = '' //never use this for adding user input to the page because user could add <script>doSomethingBad()</script> and it would run

//add elements in a loop
const parent = document.querySelector('ol');
let fragment = document.createDocumentFragment(); //think of it as a virtual machine for the DOM. It exists, but only inside of javascript until you add it to the real DOM
for (let i = 0; i < 3; i++) {
	const li = document.createElement('li')
	li.textContent = `List item with i=${i}`;
	parent.append(li)
	fragment.push(li)
}

parent.append(fragment)

//remove item from DOM
listItems[0].remove()
//alternatively:
listItems[0].parentNode.removeChild(listItems[0]) //give me the parent of the first element of the list. To that parent, it to get rid of its child

// select all elements inside a div
const scrollable = document.getElementById('scrollable')
console.log(scrollable.querySelectorAll('p'));

//make a particular paragraph inside a scrollable element to be viewed first???
scrollable.querySelectorAll('p')[5].scrollIntoView()
