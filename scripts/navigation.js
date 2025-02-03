import { constants } from './constants.js'

export function createNavigationElements(chosenLanguage, content) {
    populateHeader(content);
    populateSideNavigation(content);
    populateLanguageSelect(chosenLanguage, content)
}

//Navbar
function populateHeader(content) {
    let title = document.getElementsByTagName(constants.titleId);
    title[0].innerHTML = content.header.title;

    let logoElement = document.getElementById(constants.logoId);
    logoElement.innerHTML = content.header.title;

    let metaTag = document.querySelector(constants.metaTagId);
    metaTag.content = content.header.title;

    let descriptionTag = document.querySelector(constants.descriptionTagId);
    descriptionTag.content = content.aboutMe.description;

    headerNavigation(content);
}

//Header navigation
function headerNavigation(content) {
    let navigationItemList = document.querySelector(constants.headerNavItemId);
    clearComponents(navigationItemList);
    let navigationItem = navigationItemList.children[0];
    navigationItem.href = constants.aboutMeNavigationId;
    navigationItem.innerHTML = content.aboutMe.categoryName.toUpperCase();

    appendNavigationLink(navigationItemList, navigationItem.cloneNode(true), constants.workExperienceNavigationId, content.workExperience.categoryName.toUpperCase());
    appendNavigationLink(navigationItemList, navigationItem.cloneNode(true), constants.educationNavigationId, content.education.categoryName.toUpperCase());
    appendNavigationLink(navigationItemList, navigationItem.cloneNode(true), constants.coursesAndCertificatesNavigationId, content.coursesAndCertificates.categoryName.toUpperCase());
    appendNavigationLink(navigationItemList, navigationItem.cloneNode(true), constants.projectsNavigationId, content.projects.categoryName.toUpperCase());
    appendNavigationLink(navigationItemList, navigationItem.cloneNode(true), constants.skillsNavigationId, content.skills.categoryName.toUpperCase());
    appendNavigationLink(navigationItemList, navigationItem.cloneNode(true), constants.languagesNavigationId, content.languageSkills.categoryName.toUpperCase());
    appendNavigationLink(navigationItemList, navigationItem.cloneNode(true), constants.contactsNavigationId, content.contacts.categoryName.toUpperCase());
}

//Side navigation
function populateSideNavigation(content) {
  let sideNavigation = document.querySelector(constants.sideNavigationId);
  let navigationItemList = sideNavigation.querySelector(constants.navItemId);
  clearComponents(navigationItemList);
  let navigationItem = navigationItemList.children[0];
  navigationItem.href = constants.aboutMeNavigationId;
  navigationItem.innerHTML = content.aboutMe.categoryName.toUpperCase();

  appendNavigationLink(navigationItemList, navigationItem.cloneNode(true), constants.workExperienceNavigationId, content.workExperience.categoryName.toUpperCase());
  appendNavigationLink(navigationItemList, navigationItem.cloneNode(true), constants.educationNavigationId, content.education.categoryName.toUpperCase());
  appendNavigationLink(navigationItemList, navigationItem.cloneNode(true), constants.coursesAndCertificatesNavigationId, content.coursesAndCertificates.categoryName.toUpperCase());
  appendNavigationLink(navigationItemList, navigationItem.cloneNode(true), constants.projectsNavigationId, content.projects.categoryName.toUpperCase());
  appendNavigationLink(navigationItemList, navigationItem.cloneNode(true), constants.skillsNavigationId, content.skills.categoryName.toUpperCase());
  appendNavigationLink(navigationItemList, navigationItem.cloneNode(true), constants.languagesNavigationId, content.languageSkills.categoryName.toUpperCase());
  appendNavigationLink(navigationItemList, navigationItem.cloneNode(true), constants.contactsNavigationId, content.contacts.categoryName.toUpperCase());
}

function appendNavigationLink(navigationItemList, navigationElement, navigationId, sectionName) {
  navigationElement.href = navigationId;
  navigationElement.innerHTML = sectionName;
  navigationItemList.appendChild(navigationElement);
}

//Language select
function populateLanguageSelect(chosenLanguage, content) {
  let footerLanguageSelect = document.querySelector(constants.footerLanguageSelectId);
  createLanguageSelectOptions(footerLanguageSelect, chosenLanguage, content);
}

function createLanguageSelectOptions(languageSelect, chosenLanguage, content) {
  let firstOption = languageSelect.children[0];
  firstOption.value = constants.bulgarianLanguage;
  firstOption.innerHTML = content.languages.bg;

  let secondOption = languageSelect.children[1];
  secondOption.value = constants.englishLanguage;
  secondOption.innerHTML = content.languages.en;

  let thirdOption = languageSelect.children[2];
  thirdOption.value = constants.germanLanguage;
  thirdOption.innerHTML = content.languages.de;

  for (let index = 0; index < languageSelect.children.length; index++) {
    let option = languageSelect.children[index];

    if (option.value === chosenLanguage) {
      languageSelect.selectedIndex = index;
      break;
    }
  }
}

function clearComponents(parentElement) {
    while (parentElement.children.length > 1) {
        parentElement.removeChild(parentElement.lastChild);
    }
}