document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/coffees")
    .then(r => r.json())
    .then(data => data.forEach(displayCoffeeImage))
})


function displayCoffeeImage(coffee){
    let coffeeName = document.getElementById('coffee-names')
    let name = document.createElement('p')
    // let coffeePic = document.createElement('img')
    // let coffeeHome = document.createElement('p')
    // let coffeeBean = document.createElement('p')

    name.textContent = coffee.name
    // coffeePic.src = coffee.image
    // coffeeHome.textContent = coffee.country
    // coffeeBean.textContent = coffee['bean-type']

    coffeeName.append(name)
    // coffeeName.append(coffeePic)
    // coffeeName.append(coffeeHome)
    // coffeeName.append(coffeeBean)

    name.addEventListener("click",() => {
        putTheCoffeeOnScreen(coffee)
    })

}

function putTheCoffeeOnScreen(coffee){
    
    let coffeePic = document.getElementById('coffee-picture')
    let coffeeHome = document.getElementById('coffee-country')
    let coffeeBean = document.getElementById('coffee-bean')
    
    coffeePic.src = coffee.image
    coffeeHome.textContent = coffee.country
    coffeeBean.textContent = coffee['bean-type']


}

