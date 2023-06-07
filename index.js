document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/coffees")
    .then(r => r.json())
    .then(data => data.forEach(displayCoffeeImage))
})


function displayCoffeeImage(coffee){
    let coffeeName = document.getElementById('coffee-names')
    let name = document.createElement('p')

    name.textContent = coffee.name
    

    coffeeName.append(name)
    

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
    coffeePic.addEventListener ("mouseover", (event) => {
        let coffeeFact = document.getElementById("funfact")
        coffeeFact.textContent = coffee.fact
    })
    coffeePic.addEventListener("mouseout", () => {
        let coffeFact = document.getElementById("funfact")
        coffeFact.textContent = "  "
    })


}

