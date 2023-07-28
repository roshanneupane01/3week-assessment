console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('The form has been submitted successfully.');
}
let form = document.querySelector('#contactHome');
form.addEventListener('submit', handleSubmit);



const mouseOverPicture = event => {
	event.preventDefault()
	alert('Meow!!! Thank you, for petting me.')
}
let catPicture = document.getElementById('catPicture')
catPicture.addEventListener('mouseover', mouseOverPicture)