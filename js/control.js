export default function Controls({
    buttonPause,
    buttonPlay,
    buttonStop,
    buttonLight,
    buttonDark,
    buttonAdd,
    buttonMinus,
    wrapperSound,
    minutesDisplay,
    secondsDisplay,
    separator,
    playIcon,
    stopIcon,
    pauseIcon,
    plusCircleIcon,
    minusCircleIcon,
    darkIcon,
    cloudIcon, 
    fireIcon, 
    storeIcon, 
    treeIcon,
    tree,
    cloud,
    store,
    fire
}) {
    function changeTheme(theme) {
        let darkThemeFont = 'dark-theme-font'
        let darkThemeIcon = 'dark-theme-icon'
        let darkThemeBg = 'dark-theme-bg'
        if(theme === 'light') {
            buttonLight.classList.add('hide')
            buttonDark.classList.remove('hide')
            document.body.classList.add(darkThemeBg)
            minutesDisplay.classList.add(darkThemeFont)
            secondsDisplay.classList.add(darkThemeFont)
            separator.classList.add(darkThemeFont)
            playIcon.setAttribute('class', darkThemeIcon)
            stopIcon.setAttribute('class', darkThemeIcon)
            pauseIcon.setAttribute('class', darkThemeIcon)
            plusCircleIcon.setAttribute('class', darkThemeIcon)
            minusCircleIcon.setAttribute('class', darkThemeIcon)
            darkIcon.setAttribute('class', darkThemeIcon)
            treeIcon.setAttribute('class', darkThemeIcon)
            cloudIcon.setAttribute('class', darkThemeIcon)
            storeIcon.setAttribute('class', darkThemeIcon)
            fireIcon.setAttribute('class', darkThemeIcon)
            tree.innerHTML = treeIcon.outerHTML
            cloud.innerHTML = cloudIcon.outerHTML
            store.innerHTML = storeIcon.outerHTML
            fire.innerHTML = fireIcon.outerHTML
            buttonPlay.innerHTML = playIcon.outerHTML
            buttonStop.innerHTML = stopIcon.outerHTML
            buttonPause.innerHTML = pauseIcon.outerHTML
            buttonAdd.innerHTML = plusCircleIcon.outerHTML
            buttonMinus.innerHTML = minusCircleIcon.outerHTML
            buttonDark.innerHTML = darkIcon.outerHTML
            wrapperSound.forEach(wrapper => {
                wrapper.classList.add('wrapper-bg')
            })
        } else {
            buttonDark.classList.add('hide')
            buttonLight.classList.remove('hide')
            document.body.classList.remove(darkThemeBg)
            minutesDisplay.classList.remove(darkThemeFont)
            secondsDisplay.classList.remove(darkThemeFont)
            separator.classList.remove(darkThemeFont)
            playIcon.classList.remove(darkThemeIcon)
            stopIcon.classList.remove(darkThemeIcon)
            pauseIcon.classList.remove(darkThemeIcon)
            plusCircleIcon.classList.remove(darkThemeIcon)
            minusCircleIcon.classList.remove(darkThemeIcon)
            buttonPlay.innerHTML = playIcon.outerHTML
            buttonStop.innerHTML = stopIcon.outerHTML
            buttonPause.innerHTML = pauseIcon.outerHTML
            buttonAdd.innerHTML = plusCircleIcon.outerHTML
            buttonMinus.innerHTML = minusCircleIcon.outerHTML
            wrapperSound.forEach(wrapper => {
                wrapper.classList.remove('wrapper-bg')
            })
        }
    }

    return {
        changeTheme
    }
}