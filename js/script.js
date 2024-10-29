//import cvData from './../json/cv.json' with { type: 'json' };
import { Octokit, App } from "https://esm.sh/octokit";

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
    container.style.background = `conic-gradient(#0f0bfc ${progress * 3.6}deg, #ddf5fc 0deg)`;
}

// *** Connect to GitHub & populate page ***

await main();

async function main() {
    try {
        updateProgressControlDisplay("flex");
        updateProgressAction("Populating page with JSON data...");
        updateProgressBar(0);
        const octokit = await connectToGitHub(false);
        await populatePage(octokit);
    } catch (error) {
        console.error("Error:", error);
    } finally {
        updateProgressControlDisplay("none");
    }
}

// ***Connect to GitHub***

async function fetchJSONData(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error("Error fetching JSON data:", error);
    }
}

async function connectToGitHub(authenticate) {
    if(authenticate){
        // Authenticate on GitHub
        // Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
        const GITHUB_ACCESS_TOKEN = "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";
        const octokit = new Octokit({ auth: GITHUB_ACCESS_TOKEN });
        const {data: { login }} = await octokit.rest.users.getAuthenticated(); 
        console.log("Hello, %s", login);
        return octokit;
    } else {
        return new Octokit({})
    }
}

// *** Populate Page ***

async function populatePage(octokit) {
    await populateGrid();
    await populateProjectCards(octokit);
}


// *** Populate grids from JSON file ***

// Populate grid containers
async function populateGrid() {
    try {
        const dataObj = await fetchJSONData("./../json/cv.json");
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
    for(const obj in workExperienceObjs){
        const article = document.createElement('article');
        article.classList.add('grid', 'grid--experience');
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

async function populateProjectCards(octokit) {
    const repoNames = ["Portfolio", "Profile-Card", "Menu-Nailbiter", "Word-Count", "Simple-ToDo-List", "Minesweeper"];
    const repoObjs = await getRepos(octokit, repoNames);
    const projectCardsDiv = document.getElementById("projectCards");
    const cardArticle = projectCardsDiv.querySelectorAll(".card");
    //const projectData = await fetchJSONData(new URL("https://chas-henrik.github.io/Portfolio2/json/projects.json"));

    for(let i=0; i<cardArticle.length && i<repoObjs.length; i++) {
        const card = cardArticle[i];
        const repoObj = repoObjs[i]; 
        const titleElement = card.querySelector(".card__title");
        const descriptionElement = card.querySelector(".card__description");
        const footerElement = card.querySelector(".card__footer");
        const linkElements = card.querySelectorAll("a");
        titleElement.innerText = repoObj.data.name;
        descriptionElement.innerText = repoObj.data.description;
        linkElements[0].href = `https://chas-henrik.github.io/${repoNames[i]}/`;
        linkElements[1].href = repoObj.data.html_url;
    };
}

async function getRepos(octokit, repoNames) {
    const repoObjs = [];

    for(let i=0; i<repoNames.length; i++) {
        const repoName = repoNames[i];
        const repoObj = await getRepo(octokit, repoName);
        updateProgressBar(10 + 90*(i+1)/repoNames.length);
        repoObjs.push(repoObj);
    };

    return repoObjs;
}

async function getRepo(octokit, name) {
    try {
        const repoObj = await octokit.request('GET /repos/{owner}/{repo}', {
            owner: "Chas-Henrik",
            repo: name,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
        return repoObj;
    } catch (error) {
        console.error("Error fetching repository:", error);  
    }
}

