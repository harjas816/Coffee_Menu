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
    
    let nameOfCoffee = document.getElementById("coffee-name")
    let coffeePic = document.getElementById('coffee-picture')
    let coffeeHome = document.getElementById('coffee-country')
    let coffeeBean = document.getElementById('coffee-bean')
    
    nameOfCoffee.textContent = coffee.name
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

let form = document.getElementById("New Coffee Form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    let newObj = {
        "name": event.target.name.value,
        "image": event.target.image.value,
        "bean-type": event.target.bean.value,
        "country": event.target.country.value,
        "fact": event.target.fun_fact.value
    }
    displayCoffeeImage(newObj)
})

