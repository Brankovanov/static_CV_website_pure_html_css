import { constants } from './constants.js'


export function createCourses(content) {
    populateCoursesAndCertificates(content)
}

//Courses and certificates
function populateCoursesAndCertificates(content) {
    let coursesAndCertificatesSection = document.querySelector(constants.coursesAndCertificatesSectionId);
    let coursesAndCertificatesTitle = coursesAndCertificatesSection.querySelector(constants.coursesAndCertificatesTitleId);
    coursesAndCertificatesTitle.innerHTML = content.coursesAndCertificates.categoryName;

    let coursesAndCertificatesSlidesSection = coursesAndCertificatesSection.querySelector(constants.coursesAndCertificatesSlidesWrapper);
    let coursesAndCertificatesHiddenInputCollection = coursesAndCertificatesSlidesSection.querySelectorAll('[name="slides"]');
    let coursesAndCertificatesHiddenInput = coursesAndCertificatesHiddenInputCollection[0];

    clearCertificatesHiddenInputs(coursesAndCertificatesHiddenInputCollection, coursesAndCertificatesSlidesSection);

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
            coursesAndCertificatesHiddenInput = createSlide(coursesAndCertificatesHiddenInput, id, coursesAndCertificatesLabel, hiddenInputArray, coursesAndCertificatesSlide, slidInputId, content, index, slideContentInputId);
        } else {
            coursesAndCertificatesHiddenInput = createSlide(coursesAndCertificatesHiddenInput.cloneNode(true), id, coursesAndCertificatesLabel, hiddenInputArray, coursesAndCertificatesSlide, slidInputId, content, index, slideContentInputId);
            coursesAndCertificatesSlidesContainer.appendChild(coursesAndCertificatesHiddenInput);
        }

        prependHiddenInput(hiddenInputArray, coursesAndCertificatesSlidesSection);
    }
}

function createSlide(coursesAndCertificatesHiddenInput, id, coursesAndCertificatesLabel, hiddenInputArray, coursesAndCertificatesSlide, slidInputId, content, index, slideContentInputId) {
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

    return coursesAndCertificatesHiddenInput;
}

function prependHiddenInput(hiddenInputArray, coursesAndCertificatesSlidesSection) {
    hiddenInputArray.forEach(coursesAndCertificatesHiddenInput => {
        coursesAndCertificatesSlidesSection.prepend(coursesAndCertificatesHiddenInput);
    });
}

function clearCertificatesHiddenInputs(coursesAndCertificatesHiddenInputCollection, coursesAndCertificatesSlidesSection) {
    while (coursesAndCertificatesHiddenInputCollection.length > 1) {
        coursesAndCertificatesHiddenInputCollection[0].remove();
        coursesAndCertificatesHiddenInputCollection = coursesAndCertificatesSlidesSection.querySelectorAll('[name="slides"]');
    }
}

function clearComponents(parentElement) {
    while (parentElement.children.length > 1) {
        parentElement.removeChild(parentElement.lastChild);
    }
}
