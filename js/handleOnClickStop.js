import { buttonPause, buttonPlay, minutesDisplay, secondsDisplay } from './elements.js'
import { timerTimeOut } from './stopWatch.js'

export function handleOnClickStop() {
    clearInterval(timerTimeOut)
    minutesDisplay.textContent = '00'
    secondsDisplay.textContent = '00'
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
}