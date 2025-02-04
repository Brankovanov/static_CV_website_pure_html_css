import { constants } from './constants.js';
import { buildContact, clearComponents } from './contacts.js';


export function createAboutMeElements(content) {
    populateAboutMe(content)
}

//About me
function populateAboutMe(content) {
    let aboutMeComponent = document.querySelector(constants.aboutMeSectionId);
    let aboutMeImageElement = aboutMeComponent.querySelector(constants.aboutMeImageId);
    aboutMeImageElement.src = content.aboutMe.image;
    aboutMeImageElement.alt = content.aboutMe.name;

    let aboutMeNameElement = aboutMeComponent.querySelector(constants.aboutMePersonNameId);
    aboutMeNameElement.innerHTML = content.aboutMe.name;

    let aboutMeAgeElement = aboutMeComponent.querySelector(constants.aboutMePersonAgeId);
    aboutMeAgeElement.innerHTML = `${constants.openSpanBoldTag}${content.aboutMe.ageLabel}:${constants.closeSpanTag} ${content.aboutMe.age}`;

    populateContacts(content, aboutMeComponent);

    let aboutMeBodyElement = aboutMeComponent.querySelector(constants.aboutMeBodyId);
    aboutMeBodyElement.children[1].innerHTML = content.aboutMe.description;

    let aboutMeTitleElement = aboutMeBodyElement.querySelector(constants.aboutMeTitleId);
    aboutMeTitleElement.innerHTML = content.aboutMe.categoryName;

    let buttons = aboutMeComponent.querySelectorAll(constants.toggleContent);

    populateButtons(buttons, content);
}

function populateContacts(content, aboutMeComponent) {
    let contactList = aboutMeComponent.querySelector(constants.aboutMePersonContactsId);
    let contact = contactList.children[0];

    clearComponents(contactList);
    contact = buildContact(contact, content.contacts.telephoneLabel, content.contacts.telephone, constants.phone);

    let newContact = buildContact(contact.cloneNode(true), content.contacts.mailLabel, content.contacts.mail, constants.mail);
    contactList.appendChild(newContact);

    newContact = buildContact(contact.cloneNode(true), content.contacts.linkedInLabel, content.contacts.linkedIn, constants.link);
    contactList.appendChild(newContact);

    newContact = buildContact(contact.cloneNode(true), content.contacts.gitHubLabel, content.contacts.gitHub, constants.link);
    contactList.appendChild(newContact);
}

function populateButtons(buttons, content) {
    buttons.forEach(button => {
        button.innerHTML = content.buttons.close;
    });
}
