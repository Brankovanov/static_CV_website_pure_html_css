import { constants } from './constants.js'

//Spinner
export function showSpinner() {
  let spinnerElement = document.querySelector(constants.spinnerIdentifier);
  spinnerElement.classList.add(constants.displayFlex);
  document.body.classList.add(constants.noScroll);
}

export function hideSpinner() {
  setTimeout(() => {
    let spinnerElement = document.querySelector(constants.spinnerIdentifier);
    spinnerElement.classList.remove(constants.displayFlex);
    document.body.classList.remove(constants.noScroll);
  }, 100)
}