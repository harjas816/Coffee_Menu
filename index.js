document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/coffees")
    .then(r => r.json())
    .then(data => data.forEach(displayCoffeeImage))
})


function displayCoffeeImage(coffee){
    let coffeeName = document.getElementById('coffee-container')
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
    let coffeeName = document.getElementById('coffee-container')
    let coffeePic = document.createElement('img')
    let coffeeHome = document.createElement('p')
    let coffeeBean = document.createElement('p')
    
    coffeePic.src = coffee.image
    coffeeHome.textContent = coffee.country
    coffeeBean.textContent = coffee['bean-type']

    coffeeName.append(coffeePic)
    coffeeName.append(coffeeHome)
    coffeeName.append(coffeeBean)
}

