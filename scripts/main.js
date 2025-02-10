
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
  // TODO -> CLEAN ACCESSIBILITY REPORT + EXPORT CLEAN REPORT 
  // https://www.accessibilitychecker.org/
  console.log("TODO -> CLEAN ACCESSIBILITY REPORT + EXPORT CLEAN REPORT");
  console.log("https://www.accessibilitychecker.org/");
  // TODO -> CLEAN PAGE SPEED INSIGHT + EXPORT CLEAN REPORT
  // https://pagespeed.web.dev/
  console.log("TODO -> CLEAN PAGE SPEED INSIGHT + EXPORT CLEAN REPORT");
  console.log("https://pagespeed.web.dev/");
  // TODO -> CLEAN GTMETRIX + EXPORT CLEAN REPORT
  // https://gtmetrix.com/
  console.log("TODO -> CLEAN GTMETRIX + EXPORT CLEAN REPORT");
  console.log("https://gtmetrix.com/");
  // TODO -> CLEAN LIGHTHOUSE ANALYSIS DESKTOP AND MOBILE + EXPORT CLEAN REPORT
  console.log("TODO -> CLEAN LIGHTHOUSE ANALYSIS DESKTOP AND MOBILE + EXPORT CLEAN REPORT");
  // TODO -> UPDATE README FILE
  console.log("TODO -> UPDATE README FILE");

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
  let buttons = document.querySelectorAll(constants.button);

  buttons.forEach(button => {
    button.addEventListener(constants.click, (event) => {
      event.preventDefault();
      event.currentTarget.parentNode.click();
    });
  })
}