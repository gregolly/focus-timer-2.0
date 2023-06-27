import { minutesDisplay } from './elements.js'

const addedValue = 5

export function handleOnClickAdd() {
    let currentValue = Number(minutesDisplay.textContent)

    const incrementedValue = currentValue += addedValue

    return minutesDisplay.textContent = incrementedValue.toString()
}