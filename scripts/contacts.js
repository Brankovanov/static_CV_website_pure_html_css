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
    contact = buildContact(contact, content.contacts.telephoneLabel, content.contacts.telephone, 'phone');
    let newContact = buildContact(contact.cloneNode(true), content.contacts.mailLabel, content.contacts.mail, 'mail');
    contactList.appendChild(newContact);
    newContact =  buildContact(contact.cloneNode(true), content.contacts.linkedInLabel, content.contacts.linkedIn, 'link');
    contactList.appendChild(newContact);
    newContact = buildContact(contact.cloneNode(true), content.contacts.gitHubLabel, content.contacts.gitHub, 'link');
    contactList.appendChild(newContact);
  }
  
  function buildContact(contact, label ,content, type) {
    let contactLabel = contact.children[0];
    contactLabel.innerHTML = label;
    let contactLink = contact.children[1];
    contactLink.innerHTML = content;
  
    if(type === 'phone') {
      contactLink.setAttribute('href', `tel:${content}`);
    } else if (type === 'mail') {
      contactLink.setAttribute('href', `mailto:${content}`);
    } else {
      contactLink.setAttribute('href', `${content}`);
      contactLink.setAttribute('target', '_blank');
    }
     
    return contact;
  }

  function clearComponents(parentElement) {
    while (parentElement.children.length > 1) {
        parentElement.removeChild(parentElement.lastChild);
    }
}