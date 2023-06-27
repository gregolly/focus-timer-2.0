import { minutesDisplay } from './elements.js'

const subValue = 5

export function handleOnClickDecrement() {
    let currentValue = Number(minutesDisplay.textContent)

    if(currentValue === 0) {
        return 
    }

    const incrementedValue = currentValue -= subValue

    return minutesDisplay.textContent = incrementedValue.toString()
}