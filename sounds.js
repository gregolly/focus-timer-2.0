export default function() {
    const wood = new Audio("./sounds/Floresta.wav")
    const rain = new Audio("./sounds/Chuva.wav")
    const coffeeShop = new Audio("./sounds/Cafeteria.wav")
    const firePlace = new Audio("./sounds/Lareira.wav")

    function pressButtonWood() {
        wood.loop = true
        wood.play()
        rain.pause()
        coffeeShop.pause()
        firePlace.pause()
    }

    function pressButtonRain(){
        wood.rain = true
        rain.play()
        wood.pause()
        firePlace.pause()
        coffeeShop.pause()
    }

    function pressButtonCoffeeShop() {
        wood.coffeeShop = true
        coffeeShop.play()
        wood.pause()
        rain.pause()
        firePlace.pause()
    }

    function pressButtonFirePlace() {
        wood.firePlace = true
        firePlace.play()
        wood.pause()
        firePlace.pause()
        rain.pause()
    }

    return {
        pressButtonWood,
        pressButtonRain,
        pressButtonCoffeeShop,
        pressButtonFirePlace
    }
}