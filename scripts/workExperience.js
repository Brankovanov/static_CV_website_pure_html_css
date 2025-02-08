import { constants } from './constants.js'

export function createWorkExperience(content) {
    populateWorkExperience(content)
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
            experience = createExperienceComponent(experience, content, index);
        } else {
            experience = createExperienceComponent(experience.cloneNode(true), content, index);
        }

        experienceElements.appendChild(experience);
    }

    let buttons = experienceElements.querySelectorAll(constants.toggleContent);

    populateButtons(buttons, content);
}

function clearComponents(parentElement) {
    while (parentElement.children.length > 1) {
        parentElement.removeChild(parentElement.lastChild);
    }
}

function createExperienceComponent(experience, content, index) {
    experience.children[1].children[0].id = `${constants.workExperienceNavigationId}-${index}`;
    experience.children[1].children[1].setAttribute(constants.for, `${constants.workExperienceNavigationId}-${index}`);

    let experienceTitle = experience.querySelector(constants.experienceTitleId);
    experienceTitle.innerHTML = content.workExperience.workExperienceList[index].position;

    let experienceContent = experience.querySelector(constants.experienceContentId);
    experienceContent.innerHTML = content.workExperience.workExperienceList[index].description;

    let experienceDetails = experience.querySelector(constants.experienceDetailsId);
    experienceDetails.children[0].innerHTML = `${constants.openLabelBoldTag}${content.workExperience.workExperienceList[index].positionLabel}: ${constants.closeLabelTag}${content.workExperience.workExperienceList[index].position}`;
    experienceDetails.children[1].innerHTML = `${constants.openLabelBoldTag}${content.workExperience.workExperienceList[index].periodLabel}: ${constants.closeLabelTag}${content.workExperience.workExperienceList[index].period}`;
    experienceDetails.children[2].innerHTML = `${constants.openLabelBoldTag}${content.workExperience.workExperienceList[index].employerLabel}: ${constants.closeLabelTag}${content.workExperience.workExperienceList[index].employer}`;

    return experience;
}

function populateButtons(buttons, content) {
    buttons.forEach(button => {
        button.innerHTML = content.buttons.close;
    });
}