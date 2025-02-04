import { constants } from './constants.js'


export function createEducation(content) {
    populateEducation(content);
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
            education = createEducationElement(education, index, content);
        } else {
            education = createEducationElement(education.cloneNode(true), index, content);
        }

        educationList.appendChild(education);
    }

    let buttons = educationsComponent.querySelectorAll(constants.toggleContent);

    populateButtons(buttons, content);
}

function createEducationElement(education, index, content) {
    education.children[0].id = `${constants.educationNavigationId}-${index}`;
    education.children[1].setAttribute('for', `${constants.educationNavigationId}-${index}`);

    let educationTitle = education.querySelector(constants.educationTitleId);
    educationTitle.innerHTML = content.education.educationList[index].degreeName;

    let educationContent = education.querySelector(constants.educationDescriptionId);
    educationContent.innerHTML = content.education.educationList[index].description;

    let educationsAttribute = education.querySelector(constants.educationAttributes);
    educationsAttribute.children[0].innerHTML = `${constants.openSpanBoldTag}${content.education.educationList[index].schoolNameLabel}: ${constants.closeSpanTag}${content.education.educationList[index].schoolName}`;
    educationsAttribute.children[1].innerHTML = `${constants.openSpanBoldTag}${content.education.educationList[index].educationDegreeLabel}: ${constants.closeSpanTag}${content.education.educationList[index].educationDegree}`;
    educationsAttribute.children[2].innerHTML = `${constants.openSpanBoldTag}${content.education.educationList[index].degreeNameLabel}: ${constants.closeSpanTag}${content.education.educationList[index].degreeName}`;
    educationsAttribute.children[3].innerHTML = `${constants.openSpanBoldTag}${content.education.educationList[index].periodLabel}: ${constants.closeSpanTag}${content.education.educationList[index].period}`;

    return education;
}

function clearComponents(parentElement) {
    while (parentElement.children.length > 1) {
        parentElement.removeChild(parentElement.lastChild);
    }
}

function populateButtons(buttons, content) {
    buttons.forEach(button => {
        button.innerHTML = content.buttons.close;
    });
}