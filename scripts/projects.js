import { constants } from './constants.js'

export function createProjects(content) {
    populateProjects(content);
}

//Projects
function populateProjects(content) {
    let projectsSection = document.querySelector(constants.projectsSectionId);
    let projectsTitle = projectsSection.querySelector(constants.projectsTitleId);
    projectsTitle.innerHTML = content.projects.categoryName;

    let projectListWrapper = projectsSection.children[1];
    let projectList = projectListWrapper.children;
    let projectTile = projectList[0];

    clearComponents(projectsSection.children[1]);

    for (let index = 0; index < content.projects.projectsList.length; index++) {
        if (index === 0) {
            projectTile = createProjectTile(projectTile, content, index);
        } else {
            projectTile = createProjectTile(projectTile.cloneNode(true), content, index);
            projectListWrapper.appendChild(projectTile)
        }
    }
}

function createProjectTile(projectTile, content, index) {
    let projectName = projectTile.children[0].children[0];
    projectName.innerHTML = content.projects.projectsList[index].name;

    let contentWrapper = projectTile.children[1];
    let linksWrapper = contentWrapper.children[0];
    let linkOne = linksWrapper.children[0];
    linkOne.children[0].innerText = content.projects.projectsList[index].linkLabel;
    linkOne.children[1].innerText = content.projects.projectsList[index].link;
    linkOne.children[1].href = content.projects.projectsList[index].link;

    let linkTwo = linksWrapper.children[1];
    linkTwo.children[0].innerText = content.projects.projectsList[index].repositoryLink;
    linkTwo.children[1].innerText = content.projects.projectsList[index].repository;
    linkTwo.children[1].href = content.projects.projectsList[index].repository;

    let descriptionWrapper = contentWrapper.children[1];
    descriptionWrapper.innerHTML = content.projects.projectsList[index].description;

    let tagWrapper = contentWrapper.children[2];
    clearComponents(tagWrapper);
    createTagList(content, index, tagWrapper);

    return projectTile;
}

function createTagList(content, index, tagWrapper) {
    content.projects.projectsList[index].tags.forEach((tag) => {
        let span = document.createElement(constants.span);
        span.innerHTML = tag;
        tagWrapper.appendChild(span);
    });
}

function clearComponents(parentElement) {
    while (parentElement.children.length > 1) {
        parentElement.removeChild(parentElement.lastChild);
    }
}