import { constants } from './constants.js'

export function createFooter(content) {
    populateFooter(content);
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

    let footerElement = document.querySelector(constants.footerSectionId);
    footerElement.innerHTML = footerContent;
}