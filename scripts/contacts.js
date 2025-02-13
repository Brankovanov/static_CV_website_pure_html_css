import { constants } from './constants.js'

export function createContacts(content) {
  populateContacts(content)
}

//Contacts
function populateContacts(content) {
  let contactsSections = document.querySelector(constants.contactsSectionId);
  let contactHeader = contactsSections.children[0].children[0];
  contactHeader.innerHTML = content.contacts.categoryName;
  let contactList = contactsSections.children[1];
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

export function buildContact(contact, label, content, type) {
  let contactLabel = contact.children[0];
  contactLabel.innerHTML = label;
  let contactLink = contact.children[1];
  contactLink.innerHTML = content;

  if (type === constants.phone) {
    contactLink.setAttribute(constants.href, `${constants.telAttribute}${content}`);
  } else if (type === constants.mail) {
    contactLink.setAttribute(constants.href, `${constants.mailAttribute}${content}`);
  } else {
    contactLink.setAttribute(constants.href, `${content}`);
    contactLink.setAttribute(constants.target, constants.blank);
  }

  return contact;
}

export function clearComponents(parentElement) {
  while (parentElement.children.length > 1) {
    parentElement.removeChild(parentElement.lastChild);
  }
}