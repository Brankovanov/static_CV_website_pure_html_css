import { constants } from './constants.js'

window.getModalData = getModalData;
export function generateTemplate(chosenLanguage, content) {
  populateHeader(content);
  populateSideNavigation(content);
  populateLanguageSelect(chosenLanguage, content);
  // populateSlider(content);
  populateAboutMe(content);
  populateWorkExperience(content);
  populateEducation(content);
  populateCoursesAndCertificates(content);
  populateProjects(content);
  // populateContacts(content);
  // populateFooter(content);
  // hideSpinner();
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

//Slider
// function populateSlider(content) {
//   let carouselSection = document.querySelector(constants.carouselControlsId);
//   let slideElements = carouselSection.querySelector(constants.slidesWrapperId);
//   let slideElement = slideElements.children[0];

//   for (let index = 0; index < content.slider.slides.length; index++) {
//     if (index === 0) {
//       slideElement.children[0].src = content.slider.slides[index].imageUrl;
//       slideElement.children[0].alt = content.slider.slides[index].name;
//       slideElement.classList.add(constants.active);
//     } else {
//       let newSlide = slideElement.cloneNode(true);
//       newSlide.children[0].src = content.slider.slides[index].imageUrl;
//       newSlide.children[0].alt = content.slider.slides[index].name;
//       newSlide.classList.remove(constants.active);
//       slideElements.appendChild(newSlide);
//     }
//   }
// }

//About me
function populateAboutMe(content) {
  let aboutMeComponent = document.querySelector(constants.aboutMeSectionId);
  let aboutMeImageElement = aboutMeComponent.querySelector(constants.aboutMeImageId);
  aboutMeImageElement.src = content.aboutMe.image;
  aboutMeImageElement.alt = content.aboutMe.name;
  let aboutMeNameElement = aboutMeComponent.querySelector(constants.aboutMePersonNameId);
  aboutMeNameElement.innerHTML = content.aboutMe.name;
  let aboutMeAgeElement = aboutMeComponent.querySelector(constants.aboutMePersonAgeId);
  aboutMeAgeElement.innerHTML = `<span class="bold">${content.aboutMe.ageLabel}:</span> ${content.aboutMe.age}`;
  let aboutMeBodyElement = aboutMeComponent.querySelector(constants.aboutMeBodyId);
  aboutMeBodyElement.children[1].innerHTML = content.aboutMe.description;
  let aboutMeTitleElement = aboutMeBodyElement.querySelector(constants.aboutMeTitleId);
  aboutMeTitleElement.innerHTML = content.aboutMe.categoryName;
}

//Experience
function populateWorkExperience(content) {
  let experienceComponents = document.querySelector(constants.experienceSectionId);
  let experienceTitle = experienceComponents.querySelector(constants.experienceListTitleId);
  experienceTitle.innerHTML = content.workExperience.categoryName;

  let experienceElements = experienceComponents.querySelector(constants.experienceContainerId);
  let experience = experienceElements.children[1];
  clearComponents(experienceElements);

  for (let index = 0; index < content.workExperience.workExperienceList.length; index++) {
    if (index === 0) {
      experience.children[1].children[0].id = `${constants.workExperienceNavigationId}-${index}`;
      experience.children[1].children[1].setAttribute('for', `${constants.workExperienceNavigationId}-${index}`);
      let experienceTitle = experience.querySelector(constants.experienceTitleId);
      experienceTitle.innerHTML = content.workExperience.workExperienceList[index].position;
      let experienceContent = experience.querySelector(constants.experienceContentId);
      experienceContent.innerHTML = content.workExperience.workExperienceList[index].description;
      let experienceDetails = experience.querySelector(constants.experienceDetailsId);
      experienceDetails.children[0].innerHTML = `<label class="bold">${content.workExperience.workExperienceList[index].positionLabel}: </label>${content.workExperience.workExperienceList[index].position}`;
      experienceDetails.children[1].innerHTML = `<label class="bold">${content.workExperience.workExperienceList[index].periodLabel}: </label>${content.workExperience.workExperienceList[index].period}`;
      experienceDetails.children[2].innerHTML = `<label class="bold">${content.workExperience.workExperienceList[index].employerLabel}: </label>${content.workExperience.workExperienceList[index].employer}`;
      experienceElements.appendChild(experience);
    } else {
      let newExperience = experience.cloneNode(true);
      newExperience.children[1].children[0].id = `${constants.workExperienceNavigationId}-${index}`;
      newExperience.children[1].children[1].setAttribute('for', `${constants.workExperienceNavigationId}-${index}`);
      let experienceTitle = newExperience.querySelector(constants.experienceTitleId);
      experienceTitle.innerHTML = content.workExperience.workExperienceList[index].position;
      let experienceContent = newExperience.querySelector(constants.experienceContentId);
      experienceContent.innerHTML = content.workExperience.workExperienceList[index].description;
      let experienceDetails = newExperience.querySelector(constants.experienceDetailsId);
      experienceDetails.children[0].innerHTML = `<label class="bold">${content.workExperience.workExperienceList[index].positionLabel}: </label>${content.workExperience.workExperienceList[index].position}`;
      experienceDetails.children[1].innerHTML = `<label class="bold">${content.workExperience.workExperienceList[index].periodLabel}: </label>${content.workExperience.workExperienceList[index].period}`;
      experienceDetails.children[2].innerHTML = `<label class="bold">${content.workExperience.workExperienceList[index].employerLabel}: </label>${content.workExperience.workExperienceList[index].employer}`;
      experienceElements.appendChild(newExperience);
    }
  }
}

//Education
function populateEducation(content) {
  let educationsComponent = document.querySelector(constants.educationsSectionId);
  let educationsTitle = educationsComponent.querySelector(constants.educationsTitleId);
  educationsTitle.innerHTML = content.education.categoryName;

  let educationList = educationsComponent.querySelector(constants.educationsContentWrapperId);
  let education = educationList.children[0];

  clearComponents(educationList);

  for (let index = 0; index < content.education.educationList.length; index++) {
    if (index == 0) {
      education.children[0].id = `${constants.educationNavigationId}-${index}`;
      education.children[1].setAttribute('for', `${constants.educationNavigationId}-${index}`);
      let educationTitle = education.querySelector(constants.educationTitleId);
      educationTitle.innerHTML = content.education.educationList[index].degreeName;
      let educationContent = education.querySelector(constants.educationDescriptionId);
      educationContent.innerHTML = content.education.educationList[index].description;
      let educationsAttribute = education.querySelector(constants.educationAttributes);
      educationsAttribute.children[0].innerHTML = `<span class="bold">${content.education.educationList[index].schoolNameLabel}: </span>${content.education.educationList[index].schoolName}`;
      educationsAttribute.children[1].innerHTML = `<span class="bold">${content.education.educationList[index].educationDegreeLabel}: </span>${content.education.educationList[index].educationDegree}`;
      educationsAttribute.children[2].innerHTML = `<span class="bold">${content.education.educationList[index].degreeNameLabel}: </span>${content.education.educationList[index].degreeName}`;
      educationsAttribute.children[3].innerHTML = `<span class="bold">${content.education.educationList[index].periodLabel}: </span>${content.education.educationList[index].period}`;
    } else {
      let newEducation = education.cloneNode(true);
      newEducation.children[0].id = `${constants.educationNavigationId}-${index}`;
      newEducation.children[1].setAttribute('for', `${constants.educationNavigationId}-${index}`);
      let educationTitle = newEducation.querySelector(constants.educationTitleId);
      educationTitle.innerHTML = content.education.educationList[index].degreeName;
      let educationContent = newEducation.querySelector(constants.educationDescriptionId);
      educationContent.innerHTML = content.education.educationList[index].description;
      let educationsAttribute = newEducation.querySelector(constants.educationAttributes);
      educationsAttribute.children[0].innerHTML = `<span class="bold">${content.education.educationList[index].schoolNameLabel}: </span>${content.education.educationList[index].schoolName}`;
      educationsAttribute.children[1].innerHTML = `<span class="bold">${content.education.educationList[index].educationDegreeLabel}: </span>${content.education.educationList[index].educationDegree}`;
      educationsAttribute.children[2].innerHTML = `<span class="bold">${content.education.educationList[index].degreeNameLabel}: </span>${content.education.educationList[index].degreeName}`;
      educationsAttribute.children[3].innerHTML = `<span class="bold">${content.education.educationList[index].periodLabel}: </span>${content.education.educationList[index].period}`;
      educationList.appendChild(newEducation);
    }
  }
}


//Courses and certificates
function populateCoursesAndCertificates(content) {
  let coursesAndCertificatesSection = document.querySelector(constants.coursesAndCertificatesSectionId);
  let coursesAndCertificatesTitle = coursesAndCertificatesSection.querySelector(constants.coursesAndCertificatesTitleId);
  coursesAndCertificatesTitle.innerHTML = content.coursesAndCertificates.categoryName;
  let coursesAndCertificatesSlidesSection = coursesAndCertificatesSection.querySelector(constants.coursesAndCertificatesSlidesWrapper);
  let coursesAndCertificatesHiddenInputCollection = coursesAndCertificatesSlidesSection.querySelectorAll('[name="slides"]');
  let coursesAndCertificatesHiddenInput = coursesAndCertificatesHiddenInputCollection[0];

  while (coursesAndCertificatesHiddenInputCollection.length > 1) {
    coursesAndCertificatesHiddenInputCollection.removeChild(coursesAndCertificatesHiddenInputCollection[0]);
    coursesAndCertificatesHiddenInputCollection = coursesAndCertificatesHiddenInputCollection.slice();
  }

  let coursesAndCertificatesSlidesContainer = coursesAndCertificatesSlidesSection.children[1];
  let coursesAndCertificatesSlide = coursesAndCertificatesSlidesContainer.children[0];
  clearComponents(coursesAndCertificatesSlidesContainer);

  let coursesAndCertificatesLabelsContainer = coursesAndCertificatesSlidesSection.children[2];
  let coursesAndCertificatesLabel = coursesAndCertificatesLabelsContainer.children[0];
  clearComponents(coursesAndCertificatesLabelsContainer);

  let hiddenInputArray = [];
  for (let index = 0; index < content.coursesAndCertificates.coursesList.length; index++) {
    let id = `slide-${index}`;
    let slidInputId = `courses-image-${index}`;
    let slideContentInputId = `courses-content-${index}`;

    if (index === 0) {
      coursesAndCertificatesHiddenInput.id = id;
      coursesAndCertificatesLabel.for = id;
      coursesAndCertificatesLabel.setAttribute(constants.coursesAndCertificatesFor, id);
      coursesAndCertificatesHiddenInput.id = id;
      hiddenInputArray.unshift(coursesAndCertificatesHiddenInput);

      let slideContent = coursesAndCertificatesSlide.children[0];
      let slideInput = slideContent.children[0];
      slideInput.id = slidInputId;
      let slideLabel = slideContent.children[1];
      slideLabel.setAttribute(constants.coursesAndCertificatesFor, slidInputId);
      let slideImage = slideLabel.children[0];
      slideImage.setAttribute(constants.coursesAndCertificatesFor, slidInputId);
      slideImage.alt = content.coursesAndCertificates.coursesList[index].name;
      slideImage.src = content.coursesAndCertificates.coursesList[index].image;
      let slideDescription = coursesAndCertificatesSlide.children[1];
      let slideDescriptionInput = slideDescription.children[0];
      slideDescriptionInput.id = slideContentInputId;
      let slideDescriptionLabel = slideDescription.children[1];
      slideDescriptionLabel.setAttribute(constants.coursesAndCertificatesFor, slideContentInputId);
      let coursesPoints = slideDescriptionLabel.children[0];
      coursesPoints.children[0].children[0].innerText = content.coursesAndCertificates.coursesList[index].nameLabel;
      coursesPoints.children[0].children[1].innerText = content.coursesAndCertificates.coursesList[index].name;
      coursesPoints.children[1].children[0].innerText = content.coursesAndCertificates.coursesList[index].organizationLabel;
      coursesPoints.children[1].children[1].innerText = content.coursesAndCertificates.coursesList[index].organization;
      coursesPoints.children[2].children[0].innerText = content.coursesAndCertificates.coursesList[index].issueDateLabel;
      coursesPoints.children[2].children[1].innerText = content.coursesAndCertificates.coursesList[index].issueDate;
      coursesPoints.children[3].children[0].innerText = content.coursesAndCertificates.coursesList[index].expirationDateLabel;
      coursesPoints.children[3].children[1].innerText = content.coursesAndCertificates.coursesList[index].expirationDate;
      coursesPoints.children[4].children[0].innerText = content.coursesAndCertificates.coursesList[index].identificationLabel;
      coursesPoints.children[4].children[1].innerText = content.coursesAndCertificates.coursesList[index].identification;
      coursesPoints.children[5].children[0].innerText = content.coursesAndCertificates.coursesList[index].name;
      coursesPoints.children[5].children[0].href = content.coursesAndCertificates.coursesList[index].link;
      slideDescriptionLabel.children[1].innerHTML = content.coursesAndCertificates.coursesList[index].description;
    } else {
      let newCoursesAndCertificatesHiddenInput = coursesAndCertificatesHiddenInput.cloneNode(true);
      newCoursesAndCertificatesHiddenInput.id = id;
      newCoursesAndCertificatesHiddenInput.removeAttribute(constants.coursesAndCertificatesChecked);
      hiddenInputArray.unshift(newCoursesAndCertificatesHiddenInput)
      let newCoursesAndCertificatesLabel = coursesAndCertificatesLabel.cloneNode(true);
      newCoursesAndCertificatesLabel.setAttribute(constants.coursesAndCertificatesFor, id);
      coursesAndCertificatesLabelsContainer.appendChild(newCoursesAndCertificatesLabel);
      let newCoursesAndCertificatesSlide = coursesAndCertificatesSlide.cloneNode(true);
      let slideContent = newCoursesAndCertificatesSlide.children[0];
      let slideInput = slideContent.children[0];
      slideInput.id = slidInputId;
      let slideLabel = slideContent.children[1];
      slideLabel.setAttribute('for', slidInputId);
      let slideImage = slideLabel.children[0];
      slideImage.setAttribute('for', slidInputId);
      slideImage.alt = content.coursesAndCertificates.coursesList[index].name;
      slideImage.src = content.coursesAndCertificates.coursesList[index].image;
      let slideDescription = newCoursesAndCertificatesSlide.children[1];
      let slideDescriptionInput = slideDescription.children[0];
      slideDescriptionInput.id = slideContentInputId;
      let slideDescriptionLabel = slideDescription.children[1];
      slideDescriptionLabel.setAttribute(constants.coursesAndCertificatesFor, slideContentInputId);
      let coursesPoints = slideDescriptionLabel.children[0];
      coursesPoints.children[0].children[0].innerText = content.coursesAndCertificates.coursesList[index].nameLabel;
      coursesPoints.children[0].children[1].innerText = content.coursesAndCertificates.coursesList[index].name;
      coursesPoints.children[1].children[0].innerText = content.coursesAndCertificates.coursesList[index].organizationLabel;
      coursesPoints.children[1].children[1].innerText = content.coursesAndCertificates.coursesList[index].organization;
      coursesPoints.children[2].children[0].innerText = content.coursesAndCertificates.coursesList[index].issueDateLabel;
      coursesPoints.children[2].children[1].innerText = content.coursesAndCertificates.coursesList[index].issueDate;
      coursesPoints.children[3].children[0].innerText = content.coursesAndCertificates.coursesList[index].expirationDateLabel;
      coursesPoints.children[3].children[1].innerText = content.coursesAndCertificates.coursesList[index].expirationDate;
      coursesPoints.children[4].children[0].innerText = content.coursesAndCertificates.coursesList[index].identificationLabel;
      coursesPoints.children[4].children[1].innerText = content.coursesAndCertificates.coursesList[index].identification;
      coursesPoints.children[5].children[0].innerText = content.coursesAndCertificates.coursesList[index].name;
      coursesPoints.children[5].children[0].href = content.coursesAndCertificates.coursesList[index].link;
      coursesAndCertificatesSlidesContainer.appendChild(newCoursesAndCertificatesSlide);
    }

    hiddenInputArray.forEach(coursesAndCertificatesHiddenInput => {
      coursesAndCertificatesSlidesSection.prepend(coursesAndCertificatesHiddenInput);
    });
  }
}

// YOu are here
//Testimonials
function populateProjects(content) {
  let projectsSection = document.querySelector(constants.projectsSectionId);
  let projectsTitle = projectsSection.querySelector(constants.projectsTitleId);
  projectsTitle.innerHTML = content.projects.categoryName;
  //READy
  let projectListWrapper = projectsSection.children[1];
  let projectList = projectListWrapper.children;
  let projectTile = projectList[0];

  clearComponents(projectsSection.children[1]);


  for (let index = 0; index < content.projects.projectsList.length; index++) {
    if (index === 0) {
      let projectName = projectTile.children[0].children[0];
      projectName.innerHTML = content.projects.projectsList[index].name;

      let contentWrapper  = projectTile.children[1];
      let linksWrapper = contentWrapper.children[0];
      let linkOne = linksWrapper.children[0];
      linkOne.children[0].innerText = content.projects.projectsList[index].linkLabel;
      linkOne.children[1].innerText = content.projects.projectsList[index].link;
      linkOne.children[1].href = content.projects.projectsList[index].link;

      let linkTwo = linksWrapper.children[1];
      linkTwo.children[0].innerText = content.projects.projectsList[index].repositoryLink;
      linkTwo.children[1].innerText = content.projects.projectsList[index].repository;
      linkTwo.children[1].href = content.projects.projectsList[index].repository;

      let descriptionWrapper = contentWrapper.children[1];
      descriptionWrapper.innerHTML = content.projects.projectsList[index].description;

      let tagWrapper = contentWrapper.children[2];
      // TODO Tech stack tags
      console.log(tagWrapper)
    } else {
      let newProjectTile = projectTile.cloneNode(true);
      let projectName = newProjectTile.children[0].children[0];
      projectName.innerHTML = content.projects.projectsList[index].name;

      let contentWrapper  = projectTile.children[1];
      let linksWrapper = contentWrapper.children[0];
      let linkOne = linksWrapper.children[0];
      linkOne.children[0].innerText = content.projects.projectsList[index].linkLabel;
      linkOne.children[1].innerText = content.projects.projectsList[index].link;
      linkOne.children[1].href = content.projects.projectsList[index].link;

      let linkTwo = linksWrapper.children[1];
      linkTwo.children[0].innerText = content.projects.projectsList[index].repositoryLink;
      linkTwo.children[1].innerText = content.projects.projectsList[index].repository;
      linkTwo.children[1].href = content.projects.projectsList[index].repository;

      let descriptionWrapper = contentWrapper.children[1];
      descriptionWrapper.innerHTML = content.projects.projectsList[index].description;

      // let newTestimonial = testimonial.cloneNode(true);
      // let testimonialContent = newTestimonial.querySelector(constants.testimonialContentId)
      // testimonialContent.innerHTML = content.testimonials.testimonialsList[index].testimonial;
      // let testimonialCredentials = newTestimonial.querySelector(constants.testimonialCredentialsId);
      // testimonialCredentials.innerHTML = `${content.testimonials.testimonialsList[index].author}, ${content.testimonials.testimonialsList[index].position}`;
      // let testimonialDate = newTestimonial.querySelector(constants.testimonialDateId);
      // testimonialDate.innerHTML = content.testimonials.testimonialsList[index].date;
      // testimonials.appendChild(newTestimonial);

      projectListWrapper.appendChild(newProjectTile)
    }
  }

}

//Contacts
function populateContacts(content) {
  let contactSection = document.querySelector(constants.contactsSectionId);
  let contactTitle = contactSection.querySelector(constants.contactsSectionTitleId);
  contactTitle.innerHTML = content.contacts.name;
  let nameInput = contactSection.querySelector(constants.inputName);
  nameInput.children[0].placeholder = content.contacts.fields[0];
  nameInput.children[1].innerHTML = content.contacts.fields[0];
  let emailInput = contactSection.querySelector(constants.inputEmail);
  emailInput.children[0].placeholder = content.contacts.fields[1];
  emailInput.children[1].innerHTML = content.contacts.fields[1];
  let phoneInput = contactSection.querySelector(constants.inputPhone);
  phoneInput.children[0].placeholder = content.contacts.fields[2];
  phoneInput.children[1].innerHTML = content.contacts.fields[2];
  let selectInput = contactSection.querySelector(constants.inputSelect);
  let selectElement = selectInput.children[0];
  let messageInput = contactSection.querySelector(constants.inputTextArea);
  messageInput.children[0].placeholder = content.contacts.fields[4];
  messageInput.children[1].innerHTML = content.contacts.fields[4];

  for (let index = 0; index < content.contacts.topics.length; index++) {
    selectElement.children[index].value = content.contacts.topics[index];
    selectElement.children[index].innerHTML = content.contacts.topics[index];
  }

  selectInput.children[1].innerHTML = content.contacts.fields[3];
  let phoneNumber = contactSection.querySelector(constants.phoneNumber);
  phoneNumber.children[0].innerHTML = content.contacts.phoneTitle;
  phoneNumber.children[1].innerHTML = content.contacts.phoneContent;
  phoneNumber.children[1].href = `${constants.phoneLinkPrefix}${content.contacts.phoneContent}`;
  let emailAddress = contactSection.querySelector(constants.emailAddress);
  emailAddress.children[0].innerHTML = content.contacts.emailTitle;
  emailAddress.children[1].innerHTML = content.contacts.emailContent;
  emailAddress.children[1].href = `${constants.mailLinkPrefix}${content.contacts.mailContent}`;
  let address = contactSection.querySelector(constants.address);
  address.children[0].innerHTML = content.contacts.addressTitle;
  address.children[1].innerHTML = content.contacts.addressContent;
  address.children[1].href = content.contacts.addressCoordinates;
  let submitButton = contactSection.querySelector(constants.sendButtonId);
  submitButton.innerHTML = content.contacts.buttonContent;
}

//Footer
function populateFooter(content) {
  let currentYear = new Date().getFullYear();
  let footerContent = content.footer.content;

  if (currentYear !== constants.yearCreated) {
    footerContent = footerContent.concat(`<span>${constants.yearCreated} - ${currentYear}</span>`);
  } else {
    footerContent = footerContent.concat(`<span>${constants.yearCreated.toString()}</span>`);
  }

  let footerElement = document.querySelector(constants.footerContentId);
  footerElement.innerHTML = footerContent;
}

function clearComponents(parentElement) {
  while (parentElement.children.length > 1) {
    parentElement.removeChild(parentElement.lastChild);
  }
}

//Spinner
export function showSpinner() {
  let spinnerElement = document.querySelector(constants.spinnerIdentifier);
  spinnerElement.classList.remove(constants.displayNone);
  spinnerElement.classList.add(constants.displayFlex);
  document.body.classList.add(constants.noScroll);
}

function hideSpinner() {
  setTimeout(() => {
    let spinnerElement = document.querySelector(constants.spinnerIdentifier);
    spinnerElement.classList.add(constants.displayNone);
    spinnerElement.classList.remove(constants.displayFlex);
    document.body.classList.remove(constants.noScroll);
  }, 100)
}

//Modals
function getModalData(eventTarget) {
  let modalId = eventTarget.getAttribute(constants.bsDataTargetAttribute);
  let targetContentLabel = eventTarget.querySelector(constants.contentLabelDataAttribute);
  let targetContentImage = eventTarget.querySelector(constants.contentImageDataAttribute);
  let targetContentBody = eventTarget.querySelector(constants.contentBodyDataAttribute);
  let targetModal = document.querySelector(modalId);
  let targetModalLabel = targetModal.querySelector(constants.modalLabelDataAttribute);
  let targetModalImage = targetModal.querySelector(constants.modalImageDataAttribute);
  let targetModalBody = targetModal.querySelector(constants.modalBodyDataAttribute);

  if (targetContentLabel) {
    targetModalLabel.innerHTML = modalId === '#ourTeamModal' ? `${targetContentLabel.innerHTML} - ${targetContentBody.innerHTML}` : targetContentLabel.innerHTML;
  }

  if (targetContentImage) {
    targetModalImage.alt = targetContentImage.alt;
    targetModalImage.src = targetContentImage.src;
  }

  if (targetContentBody) {
    targetModalBody.innerHTML = modalId === '#ourTeamModal' ? targetContentLabel.getAttribute(constants.teamBioIdentifier) : targetContentBody.innerHTML;
  }
}