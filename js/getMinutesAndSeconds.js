import { inputMinutes, inputSeconds, minutesDisplay, secondsDisplay } from "./elements.js"

export function getMinutesAndSeconds() {
    minutesDisplay.textContent = inputMinutes.value
    secondsDisplay.textContent = inputSeconds.value
}