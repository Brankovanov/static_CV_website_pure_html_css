import { constants } from './constants.js';
import { createNavigationElements } from './navigation.js';
import { createAboutMeElements } from './aboutMe.js';
import { createWorkExperience } from './workExperience.js';
import { createEducation } from './education.js';
import { createCourses } from './courses.js';
import { createProjects } from './projects.js';
import { createSkills } from './skills.js';
import { createContacts } from './contacts.js';
import { createLanguages } from './languages.js';
import { createFooter } from './footer.js';

export function generateTemplate(chosenLanguage, content) {
  try {
    createNavigationElements(chosenLanguage,content);
    createAboutMeElements(content);
    createWorkExperience(content);
    createEducation(content);
    createCourses(content);
    createProjects(content);
    createSkills(content);
    createLanguages(content);
    createContacts(content);
    createFooter(content);
  } catch {
    console.log('error');
  }

  hideSpinner();
}

//Spinner
export function showSpinner() {
  let spinnerElement = document.querySelector(constants.spinnerIdentifier);
  spinnerElement.classList.add(constants.displayFlex);
  document.body.classList.add(constants.noScroll);
}

function hideSpinner() {
  setTimeout(() => {
    let spinnerElement = document.querySelector(constants.spinnerIdentifier);
    spinnerElement.classList.remove(constants.displayFlex);
    document.body.classList.remove(constants.noScroll);
  }, 100)
}