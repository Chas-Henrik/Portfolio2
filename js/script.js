import { loadJSONData } from "./json-loader.js";
import { connectToGitHub, getRepoEndpoint } from "./github-api.js";

// *** Menu buttons (active indication) ***
const menuListUlButtons = document.getElementById("menu__list--ul-buttons");
const menuButtons = menuListUlButtons.querySelectorAll("a");

menuButtons.forEach((button) => {
    button.addEventListener("click", menuButtonClicked);
});

function menuButtonClicked(event) {
    menuButtons.forEach((button) => {
        button.classList.remove("text-shadow-active");
    });
    event.target.classList.add("text-shadow-active");
}

// *** Hamburger menu (toggle menu) ***

const hamburgerMenu = document.getElementById("hamburger-menu");
hamburgerMenu.addEventListener("click", hamburgerMenuClicked);

function hamburgerMenuClicked() {
    const menuNav = document.getElementById("menu");
    menuNav.classList.toggle("menu--collapsed");
    updateScrollPaddingTop();
}

// *** Update scroll-padding-top when header is resized ***

const headerElement = document.getElementById("header");
new ResizeObserver(updateScrollPaddingTop).observe(headerElement);

function updateScrollPaddingTop() {
    const htmlElement = document.getElementsByTagName("html")[0];

    htmlElement.style.scrollPaddingTop = `${headerElement.offsetHeight + 20}px`;
}

// *** Progress Bar functions ***

function updateProgressControlDisplay(value) {
    let progressControl = document.getElementById("progress-control");
    progressControl.style.display = value;
}

function updateProgressAction(progress) {
    let progressAction = document.getElementById("progress-action");
    progressAction.textContent = progress;
}

function updateProgressBar(progress) {
    let container = document.getElementById("progress-container");
    let progressValue = document.getElementById("progress-value");

    progressValue.textContent = `${Math.round(progress).toFixed(0)}%`;
    container.style.background = `conic-gradient(#0F0BFC ${progress * 3.6}deg, #BCE9F5 0deg)`;
}

// *** Grid functions ***

function expandAllDetails(e) {
    const expandAllButton = e.target;
    const container = e.target.parentElement.parentElement;
    const details = container.querySelectorAll("details");

    if (expandAllButton.innerText === "Expand All") {
        expandAllButton.innerText = "Collapse All";
        details.forEach((detail) => {
            detail.open = true;
        });
    } else {
        expandAllButton.innerText = "Expand All";
        details.forEach((detail) => {
            detail.open = false;
        });
    }
    e.preventDefault();
}

// *** Connect to GitHub & populate page ***

await main();

async function main() {
    try {
        updateProgressControlDisplay("flex");
        updateProgressAction("Populating page with JSON data...");
        updateProgressBar(0);
        await connectToGitHub();
        await populatePage();
    } catch (error) {
        console.error("Error:", error);
    } finally {
        updateProgressControlDisplay("none");
    }
}

// *** Populate Page ***

async function populatePage() {
    await populateGrid();
    await populateProjectCards();
}


// *** Populate grids from JSON file ***

// Populate grid containers
async function populateGrid() {
    try {
        const dataObj = await loadJSONData("./../json/cv.json");
        populateAboutMe(dataObj["aboutMe"]);
        populateGridContainer(dataObj["workExperience"], "grid-work-experience");
        populateGridContainer(dataObj["education"], "grid-education");
        updateProgressBar(10);
    } catch (error) {
        console.error("Unable to read JSON file:", error);
    }
}

// Populate About Me
function populateAboutMe(aboutMeObj) {
    const aboutDescriptionElement = document.getElementById("about--description");
    const p = document.createElement('p');
    aboutDescriptionElement.innerText = aboutMeObj["description"];
}

// Populate grid container
function populateGridContainer(workExperienceObjs, parentElementId) {
    const workExperienceElement = document.getElementById(parentElementId);
    const detailsExpandAll = document.createElement('details');

    detailsExpandAll.classList.add("grid__item--details", "grid__item--description", "paragraph__size--grid-fig-caption");
    detailsExpandAll.innerHTML = `<summary class="grid__item--clickable paragraph__size--grid-summary">Expand All</summary>`;
    workExperienceElement.appendChild(detailsExpandAll);

    const summary = detailsExpandAll.querySelector("summary");
    summary.addEventListener("click", (e) => expandAllDetails(e));

    for(const obj in workExperienceObjs){
        const article = document.createElement('article');
        article.classList.add('grid', 'grid--experience', 'break-inside--avoid');
        workExperienceElement.appendChild(article);
        populateGridElements(workExperienceObjs[obj], article);
    };
}

// Populate grid elements
function populateGridElements(workExperienceObj, gridContainerElement) {
    for(const key in workExperienceObj) {
        switch(key) {
            case 'role':
                const h2 = document.createElement("h2");
                h2.classList.add("grid__item--role", "paragraph__size--grid-role");
                h2.innerText = workExperienceObj[key];
                gridContainerElement.appendChild(h2);
                break;
            case 'type':
                const p = document.createElement("p");
                p.classList.add("grid__item--type", "paragraph__size--grid-fig-caption");
                p.innerText = workExperienceObj[key];
                gridContainerElement.appendChild(p);
                break;
            case 'provider':
                const figureProvider = document.createElement("figure");
                figureProvider.classList.add("grid__figure", "grid__item--provider");
                figureProvider.innerHTML = `<img src="./svg/office-building.svg" alt="Office Building Icon"><figcaption class="paragraph__size--grid-fig-caption">${workExperienceObj[key]}</figcaption>`;
                gridContainerElement.appendChild(figureProvider);
                break;
            case 'date':
                const figureDate = document.createElement("figure");
                figureDate.classList.add("grid__figure", "grid__item--date");
                figureDate.innerHTML = `<img src="./svg/calender.svg" alt="Calender Icon"><figcaption class="paragraph__size--grid-fig-caption">${workExperienceObj[key]}</figcaption>`;
                gridContainerElement.appendChild(figureDate);
                break;
            case 'location':
                const figureLocation = document.createElement("figure");
                figureLocation.classList.add("grid__figure", "grid__item--location");
                figureLocation.innerHTML = `<img src="./svg/location.svg" alt="Location Icon"><figcaption class="paragraph__size--grid-fig-caption">${workExperienceObj[key]}</figcaption>`;
                gridContainerElement.appendChild(figureLocation);
                break;                
            case 'description':
                const detailsDescription = document.createElement("details");
                detailsDescription.classList.add("grid__item--details", "grid__item--description", "paragraph__size--grid-fig-caption");
                detailsDescription.innerHTML = `<summary class="grid__item--clickable paragraph__size--grid-summary">Description</summary>`;
                gridContainerElement.appendChild(detailsDescription);
                workExperienceObj[key].forEach((item) => {
                    const p = document.createElement("p");
                    p.innerText = item;
                    detailsDescription.appendChild(p);
                });
                break;
            case 'technologies':
                const detailsTechnologies= document.createElement("details");
                detailsTechnologies.classList.add("grid__item--details", "grid__item--technology", "paragraph__size--grid-fig-caption");
                detailsTechnologies.innerHTML = `<summary class="grid__item--clickable paragraph__size--grid-summary">Technologies</summary><ul class="grid__ul--technology"></ul>`;
                gridContainerElement.appendChild(detailsTechnologies);
                const ulTechnologies = detailsTechnologies.querySelector("ul");
                workExperienceObj[key].forEach((item) => {
                    const li = document.createElement("li");
                    li.innerText = item;
                    ulTechnologies.appendChild(li);
                });
                break;               
        }
    }
}


// *** Populate projects from GitHub ***

async function populateProjectCards() {
    const repoNames = ["Minesweeper", "Simple-ToDo-List", "Word-Count", "Profile-Card", "Menu-Nailbiter", "Portfolio"];
    const projectCardsDiv = document.getElementById("projectCards");
    const cardArticle = projectCardsDiv.querySelectorAll(".card");
    const repoObjs = [];
    const languageObjs = [];
    await fetchRepoEndpoints(repoNames, repoObjs, languageObjs);

    for(let i=0; i<cardArticle.length && i<repoObjs.length; i++) {
        const card = cardArticle[i];
        const repoObj = repoObjs[i]; 
        const titleElement = card.querySelector(".card__title");
        const descriptionElement = card.querySelector(".card__description");
        const techStackElement = card.querySelector(".card__tech-stack");
        const linkElements = card.querySelectorAll("a");
        const languageStr = Object.keys(languageObjs[i].data).join(", ");

        titleElement.innerText = repoObj.data.name;
        descriptionElement.innerText = repoObj.data.description;
        techStackElement.innerText = languageStr;
        linkElements[0].href = `https://chas-henrik.github.io/${repoNames[i]}/`;
        linkElements[1].href = repoObj.data.html_url;
    };
}

async function fetchRepoEndpoints(repoNames, repoObjs, languageObjs) {
    for(let i=0; i<repoNames.length; i++) {
        const repoName = repoNames[i];
        const repoObj = await getRepoEndpoint(repoName, 'GET /repos/{owner}/{repo}');
        const languageObj = await getRepoEndpoint(repoName, 'GET /repos/{owner}/{repo}/languages');
        updateProgressBar(10 + 90*(i+1)/repoNames.length);
        repoObjs.push(repoObj);
        languageObjs.push(languageObj);
    };
}


