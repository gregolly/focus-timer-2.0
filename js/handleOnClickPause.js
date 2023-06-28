import { buttonPause, buttonPlay } from './elements.js'
import { stopWatchState } from '../utils/variables.js'

export function handleOnClickPause() {
    stopWatchState.isPaused = !stopWatchState.isPaused
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
}