import { constants } from './constants.js'
import { getCookies } from './cookies.js';
import { generateTemplate } from './template.js';
import { readContent } from './content.js';
import { showError } from './error.js';
import { showSpinner } from './spinner.js';

let content;
let chosenLanguage = constants.bulgarianLanguage;

main();
async function main() {
  showSpinner();
  try {
    chosenLanguage = await getCookies(constants.cookieTypes.language, chosenLanguage);
    content = await readContent(chosenLanguage);
    generateTemplate(chosenLanguage, content);
    disableButtons();
  } catch (error) {
    console.error(error);
    showError(error);
  }
}

function disableButtons() {
  let buttons = document.querySelectorAll('button');

  buttons.forEach(button => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.currentTarget.parentNode.click();
    });
  })
}