import { constants } from './constants.js'

export function createLanguages(content) {
    populateLanguages(content) 
}

//Languages
function populateLanguages(content) {
  let languagesWrapper = document.querySelector(constants.languagesSectionId);
  let languagesTitle = languagesWrapper.children[0].children[0];
  languagesTitle.innerHTML = content.languageSkills.categoryName;

  let languageTable = languagesWrapper.children[1];
  let tableCaption = languageTable.children[0];
  tableCaption.innerHTML = content.languageSkills.categoryName;

  let tableHead = languageTable.children[1].children[0];
  tableHead.children[0].innerHTML = content.languageSkills.languageListLabel;
  tableHead.children[1].innerHTML = content.languageSkills.speakingLabel;
  tableHead.children[2].innerHTML = content.languageSkills.writingLabel;
  tableHead.children[3].innerHTML = content.languageSkills.readingLabel;
  tableHead.children[4].innerHTML = content.languageSkills.grammarLabel;

  clearTable(languageTable);
  createTableRow(content, languageTable);
}

function createTableRow(content, languageTable) {
    content.languageSkills.languagesList.forEach((language, index) => {
        let tableBody = document.createElement('tbody');
        tableBody.appendChild(createColumn(content.languageSkills.languageListLabel, language, true));
        tableBody.appendChild(createColumn(content.languageSkills.speakingLabel, content.languageSkills.speakingList[index], false));
        tableBody.appendChild(createColumn(content.languageSkills.writingLabel, content.languageSkills.writingList[index], false));
        tableBody.appendChild(createColumn(content.languageSkills.readingLabel, content.languageSkills.readingList[index], false));
        tableBody.appendChild(createColumn(content.languageSkills.grammarLabel, content.languageSkills.grammarList[index], false));
        languageTable.appendChild(tableBody);
    });
}

function clearTable(languageTable) {
  while (languageTable.children.length > 2) {
    languageTable.removeChild(languageTable.lastChild);
  }
}

function createColumn(label, content, isBold) {
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.innerHTML = label;
  th.setAttribute('scope', 'row');
  let td = document.createElement('td');
  td.innerHTML = content;

  if (isBold) {
    td.setAttribute('class', 'bold')
  }

  tr.appendChild(th);
  tr.appendChild(td);
 
  return tr;
}