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
}

function clearComponents(parentElement) {
    while (parentElement.children.length > 1) {
        parentElement.removeChild(parentElement.lastChild);
    }
}

function createExperienceComponent(experience, content, index) {
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

    return experience;
}