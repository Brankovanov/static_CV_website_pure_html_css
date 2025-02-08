import { constants } from './constants.js'

export function createFooter(content) {
    populateFooter(content);
}

//Footer
function populateFooter(content) {
    let currentYear = new Date().getFullYear();
    let footerContent = content.footer.content;

    if (currentYear !== constants.yearCreated) {
        footerContent = footerContent.concat(`${constants.openSpanTag}${constants.yearCreated} - ${currentYear}${constants.closeSpanTag}`);
    } else {
        footerContent = footerContent.concat(`${constants.openSpanTag}${constants.yearCreated.toString()}${constants.closeSpanTag}`);
    }

    let footerElement = document.querySelector(constants.footerSectionId);
    footerElement.innerHTML = footerContent;
}