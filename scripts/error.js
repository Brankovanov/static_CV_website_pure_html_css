import { constants } from './constants.js';

export function showError(error) {
  document.body.classList.add(constants.noScroll);
  let errorElement = document.querySelector(constants.errorSectionId);
  let errorMessage  = errorElement.children[0];
  errorMessage.innerHTML = constants.errorMessage;
 
  let technicalMessage = errorElement.children[1];
  technicalMessage.innerHTML = error;
 
  errorElement.classList.add(constants.displayFlex);
}