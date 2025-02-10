import { setCookie } from './cookies.js';
import { generateTemplate } from './template.js';
import { constants } from './constants.js';
import { showSpinner } from './spinner.js';

window.changeLanguage = changeLanguage;

export async function readContent(chosenLanguage) {
    let contentLink = `${constants.contentAssetOrigin}${chosenLanguage}${constants.contentJsonFile}`;
    const response = await fetch(contentLink);

    if (!response.ok) {
      throw new Error(`${constants.httpError} ${response.status}`);
    }

    await cacheDynamicContent(contentLink, response);
    const content = await response.json();


    return content;
}

async function changeLanguage(lang) {
  showSpinner();
  let chosenLanguage = lang.value;
  let content = await readContent(chosenLanguage);
  setCookie(constants.cookieTypes.language, chosenLanguage);
  generateTemplate(lang, content);
}

async function cacheDynamicContent(url, response) {
  const cache = await caches.open('cv-site-cache-dynamic');
  cache.put(url, response.clone());
}