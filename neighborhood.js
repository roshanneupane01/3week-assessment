let selectRandomRestaurantBtn = document.getElementById("randomRestaurantBtn")

 let choiceFunction = event => {
  event.preventDefault()

  let restaurants = ["Lazy Dog Restaurant & Bar", "Fuzzy's Taco Shop", "Chop House Burger", "Nanglo Nepali and Indian Restaurant"]

  let randomIndex = Math.floor(Math.random() * restaurants.length)
  
  alert("I recommend trying " + restaurants[randomIndex] + " for a delicious meal!")
}

selectRandomRestaurantBtn.addEventListener("click",choiceFunction)