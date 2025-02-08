import { hideSpinner } from './spinner.js';
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
    hideSpinner();
}