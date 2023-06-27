import { stopWatchState } from '../utils/variables.js'
import { minutesDisplay, secondsDisplay } from './elements.js'

export let timerTimeOut;

export function stopWatch() {
    let minutes = minutesDisplay.textContent
    let seconds = secondsDisplay.textContent

    timerTimeOut = setInterval(() => {
        if(stopWatchState.isPaused) {
            return;
        }

        seconds--;

        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }

        if (minutes === 0 && seconds === 0) {
            clearInterval(timerTimeOut)
            console.log('Cronometro zerado!');
        }

        const minutesFormatados = String(minutes).padStart(2, '0')
        const secondsFormatados = String(seconds).padStart(2, '0')

        minutesDisplay.textContent = `${minutesFormatados}`
        secondsDisplay.textContent = `${secondsFormatados}`
    }, 1000)
}