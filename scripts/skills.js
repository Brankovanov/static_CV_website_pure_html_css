import { constants } from './constants.js'

export function createSkills(content) {
    populateSkills(content)
}

//Skills
function populateSkills(content) {
  let skillSection = document.querySelector(constants.skillsSectionId);
  let skillTitle = skillSection.children[0].children[0];
  skillTitle.innerHTML = content.skills.categoryName;

  let technicalSkills = skillSection.children[1];
  let technicalSkillLabel = technicalSkills.children[0];
  technicalSkillLabel.innerHTML = content.skills.technicalSkillsLabel;
  
  let technicalSkillWrapper = technicalSkills.children[1];
  clearComponents(technicalSkills);

  content.skills.technicalSkills.forEach((skill, index) => {
    if(index === 0) {
      createWrapper(technicalSkillWrapper, index, skill, technicalSkills);
    } else {
      createWrapper( technicalSkillWrapper.cloneNode(true), index, skill, technicalSkills);
    }
  });

  let softSkills =  skillSection.children[2]
  let softSkillLabel = softSkills.children[0];
  softSkillLabel.innerHTML = content.skills.softSkillsLabel;

  let softSkillWrapper = softSkills.children[1];
  clearComponents(softSkills);
  content.skills.softSkills.forEach((skill, index) => {
    if(index === 0) {
        createWrapper(softSkillWrapper, index, skill, softSkills);
    } else {
      createWrapper(softSkillWrapper.cloneNode(true), index, skill, softSkills);
    }
  });
}

function  createWrapper(technicalSkillWrapper, index, skill, technicalSkills) {
    let skillInput = technicalSkillWrapper.children[0];
    skillInput.id = `${constants.technicalSkillInputId}${index}`;

    let content = technicalSkillWrapper.children[1];
    content.setAttribute('for', `${constants.technicalSkillInputId}${index}`);
    let skillCover = content.children[0];
    skillCover.innerHTML = skill.skill;
    let skillName = content.children[1];
    skillName.innerHTML = skill.skill;
    let skillDescription = content.children[2];
    skillDescription.innerHTML = skill.description;

    technicalSkills.appendChild(technicalSkillWrapper);
}

function clearComponents(parentElement) {
    while (parentElement.children.length > 1) {
        parentElement.removeChild(parentElement.lastChild);
    }
}
