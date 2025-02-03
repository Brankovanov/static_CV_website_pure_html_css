import { setCookie } from './cookies.js';
import { generateTemplate, showSpinner } from './template.js';
import { constants } from './constants.js'
window.changeLanguage = changeLanguage;

export async function readContent(chosenLanguage) {
  try {
    let contentLink = `${constants.contentAssetOrigin}${chosenLanguage}${constants.contentJsonFile}`;
    const response = await fetch(contentLink);

    if (!response.ok) {
      throw new Error(`${constants.httpError} ${response.status}`);
    }

    const content = await response.json();
    return content;
  } catch (error) {
    console.error(constants.fetchingError, error);
    hideSpinner();
  }
}

async function changeLanguage(lang) {
  showSpinner();
  let chosenLanguage = lang.value;
  let content = await readContent(chosenLanguage);
  setCookie(constants.cookieTypes.language, chosenLanguage);
  generateTemplate(lang, content);
}