
let selectColor = document.querySelector('#color')
const myFavcolor = event => {
	event.preventDefault()

	alert('My Favorite Color is: Blue')
}
selectColor.addEventListener('click', myFavcolor);


let selectFavPlace = document.querySelector('#place')
const myFavPlace = event => {
    event.preventDefault()

    alert('My Favorite Place is: New York')
}
selectFavPlace.addEventListener('click', myFavPlace)


let selectFaVRitual = document.querySelector('#ritual')
const myFavRitual = event => {
    event.preventDefault()

    alert('My Favorite Ritual is: Meditation')
}
selectFaVRitual.addEventListener('click', myFavRitual)