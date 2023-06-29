export function createInputRange() {
    const inputRange = document.createElement('input')
    inputRange.setAttribute('type', 'range')
    inputRange.setAttribute('min', '10')
    inputRange.setAttribute('max', '100')
    return inputRange
}
  