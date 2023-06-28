import { handleSubmitForm } from './handleSubmitForm.js'
import { handleOnClickPlay } from './handleOnClickPlay.js'
import { handleOnClickStop } from './handleOnClickStop.js'
import { handleOnClickPause } from './handleOnClickPause.js'
import { handleOnClickAdd } from './handleOnClickAdd.js'
import { handleOnClickDecrement } from './handleOnClickDecrement.js'
import Sound from './sounds.js'

import Controls from './control.js'

import { 
    playIcon, 
    stopIcon, 
    pauseIcon,
    plusCircleIcon, 
    minusCircleIcon,
    treeIcon,
    cloudIcon,
    storeIcon,
    fireIcon,
    lightIcon,
    darkIcon
} from './icons.js'

import { 
    buttonPlay, 
    buttonStop, 
    buttonAdd, 
    buttonMinus,
    buttonPause,
    tree,
    cloud,
    store,
    fire,
    form,
    buttonsSound,
    buttonLight,
    buttonDark,
    minutesDisplay,
    secondsDisplay,
    separator,
    wrapperSound,
} from './elements.js'

const sound = Sound()
const controls = Controls({
    buttonLight,
    buttonDark,
    buttonAdd,
    buttonMinus,
    minutesDisplay,
    secondsDisplay,
    separator,
    buttonPause,
    buttonPlay,
    buttonStop,
    buttonLight,
    buttonDark,
    minutesDisplay,
    secondsDisplay,
    separator,
    playIcon,
    stopIcon,
    pauseIcon,
    plusCircleIcon,
    minusCircleIcon,
    lightIcon,
    darkIcon,
    wrapperSound,
    cloudIcon, 
    fireIcon, 
    storeIcon, 
    treeIcon,
    buttonsSound,
    tree,
    cloud,
    store,
    fire
})

buttonPlay ? buttonPlay.innerHTML = playIcon.outerHTML : ''
buttonPause ? buttonPause.innerHTML = pauseIcon.outerHTML : ''
buttonStop ? buttonStop.innerHTML = stopIcon.outerHTML : ''
buttonAdd ? buttonAdd.innerHTML = plusCircleIcon.outerHTML : ''
buttonMinus ? buttonMinus.innerHTML = minusCircleIcon.outerHTML : ''
tree ? tree.innerHTML = treeIcon.outerHTML : ''
cloud ? cloud.innerHTML = cloudIcon.outerHTML : ''
store ? store.innerHTML = storeIcon.outerHTML : ''
fire ? fire.innerHTML = fireIcon.outerHTML : ''
buttonLight ? buttonLight.innerHTML = lightIcon.outerHTML : ''
buttonDark ? buttonDark.innerHTML = darkIcon.outerHTML : ''

buttonPause.classList.add('hide')
buttonDark.classList.add('hide')
form.addEventListener('submit', handleSubmitForm)
buttonPlay.addEventListener('click', handleOnClickPlay)
buttonStop.addEventListener('click', handleOnClickStop)
buttonPause.addEventListener('click', handleOnClickPause)
buttonAdd.addEventListener('click', handleOnClickAdd)
buttonMinus.addEventListener('click', handleOnClickDecrement)
buttonsSound.forEach(button => {
    button.addEventListener('click', () => {
        buttonsSound.forEach(otherButton => {
            otherButton.classList.remove('active')
        })
        button.classList.add('active')
    })
})

tree.addEventListener('click', () => {
    sound.pressButtonWood()
})
cloud.addEventListener('click', () => {
    sound.pressButtonRain()
})
store.addEventListener('click', () => {
    sound.pressButtonCoffeeShop()
})
fire.addEventListener('click', () => {
    sound.pressButtonFirePlace()
})
buttonLight.addEventListener('click', () => {
    controls.changeTheme('light')

})
buttonDark.addEventListener('click', () => {
    controls.changeTheme('dark')
})