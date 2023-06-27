import { inputMinutes, inputSeconds } from './elements.js';
import { getMinutesAndSeconds } from './getMinutesAndSeconds.js';

export function handleSubmitForm(event) {
  event?.preventDefault();
  getMinutesAndSeconds()

  inputMinutes.value = ''
  inputSeconds.value = ''
}
