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
        wood.volume = 0.5
    }

    function pressButtonRain(){
        wood.rain = true
        rain.play()
        wood.pause()
        firePlace.pause()
        coffeeShop.pause()
        rain.volume = 0.5
    }

    function pressButtonCoffeeShop() {
        wood.coffeeShop = true
        coffeeShop.play()
        wood.pause()
        rain.pause()
        firePlace.pause()
        coffeeShop.volume = 0.5
    }

    function pressButtonFirePlace() {
        wood.firePlace = true
        firePlace.play()
        wood.pause()
        firePlace.pause()
        rain.pause()
        firePlace.volume = 0.5
    }

    return {
        pressButtonWood,
        pressButtonRain,
        pressButtonCoffeeShop,
        pressButtonFirePlace,
        wood,
        rain,
        coffeeShop,
        firePlace
    }
}