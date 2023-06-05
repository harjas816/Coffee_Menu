document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/coffees")
    .then(r => r.json())
    .then(data => data.forEach(displayCoffeeImage))
})


function displayCoffeeImage(coffee){
     
}