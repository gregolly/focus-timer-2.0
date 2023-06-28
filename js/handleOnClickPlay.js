import { stopWatch } from "./stopWatch.js";
import { buttonPause, buttonPlay, minutesDisplay,  } from './elements.js'

import { stopWatchState } from '../utils/variables.js'

export function handleOnClickPlay() {
    if(Number(minutesDisplay.textContent) === 0) {
        return
    } else {
        stopWatch()
    }
    
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    
    stopWatchState.isPaused = false
}