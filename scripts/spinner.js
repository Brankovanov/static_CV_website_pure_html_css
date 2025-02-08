import { constants } from './constants.js'

//Spinner
export function showSpinner() {
  let spinnerElement = document.querySelector(constants.spinnerIdentifier);
  let mainContent = document.querySelector(constants.mainContentId);
  
  if (!mainContent.classList.contains(constants.hidden)) {
    mainContent.classList.add(constants.hidden);
  }

  spinnerElement.classList.add(constants.displayFlex);
  document.body.classList.add(constants.noScroll);
}

export function hideSpinner() {
  setTimeout(() => {
    let spinnerElement = document.querySelector(constants.spinnerIdentifier);
    spinnerElement.classList.remove(constants.displayFlex);
    document.body.classList.remove(constants.noScroll);
    let mainContent = document.querySelector(constants.mainContentId);
    mainContent.classList.remove(constants.hidden);
    mainContent.removeAttribute(constants.style);
  }, 100)
}