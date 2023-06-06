document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/coffees")
    .then(r => r.json())
    .then(data => data.forEach(displayCoffeeImage))
})


// function displayCoffeeImage(coffee){
//      let coffeeName = document.getElementById('coffee-container')
//      let name = document.createElement('p')
//      let coffeePic = document.createElement('img')
//      let coffeeHome = document.createElement('p')
//      let coffeeBean = document.createElement('p')

//      name.textContent = coffee.name
//      coffeePic.src = coffee.image
//      coffeeHome.textContent = coffee.country
//      coffeeBean.textContent = coffee['bean-type']

//      coffeeName.append(name)
//      coffeeName.append(coffeePic)
//      coffeeName.append(coffeeHome)
//      coffeeName.append(coffeeBean)

// }

function addToCarousel(coffee){
    let carouselTrackContainer = document.getElementById("carousel-track-container")
    let carouselTrack = document.getElementsByClassName("carousel-track")
    let coffeeSlide = document.createElement("li")
    
    coffeeSlide.className = "carousel-slide"
    let coffeePic = document.createElement("img")
    coffeePic.src = coffee.image

    coffeeSlide.appendChild(coffeePic)
    carouselTrack.appendChild(coffeeSlide)
    carouselTrackContainer.appendChild(carouselTrack)
}