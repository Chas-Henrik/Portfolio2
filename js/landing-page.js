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
const reSizeObserver = new ResizeObserver(updateScrollPaddingTop).observe(headerElement);

function updateScrollPaddingTop() {
    const htmlElement = document.getElementsByTagName("html")[0];

    htmlElement.style.scrollPaddingTop = `${headerElement.offsetHeight + 30}px`;
}

// *** Progress Bar functions ***

function displayProgressControl(value) {
    let progressControl = document.getElementById("progress-control-id");
    progressControl.style.display = value;
}

function updateProgressAction(progress) {
    let progressAction = document.getElementById("progress-action-id");
    progressAction.textContent = progress;
}

function updateProgressBar(progress) {
    let progressBar = document.getElementById("progress-bar-id");
    let progressBarValue = document.getElementById("progress-bar-value-id");

    progressBarValue.textContent = `${Math.round(progress).toFixed(0)}%`;
    progressBar.style.background = `conic-gradient(#0F0BFC ${progress * 3.6}deg, #BCE9F5 0deg)`;
}
