const BODY = document.querySelector('body');
const TITLE = document.getElementById('page-title');
const FOOTER = document.querySelector('footer');
const BUTTON = document.getElementById('mode-selector');
const DARK_MODE_CLASS = "dark-mode"
BUTTON.addEventListener('click', toggleDark);

function toggleDark(){
    toggleClass();
    toggleTitle();
}

function toggleClass(){
    BODY.classList.toggle(DARK_MODE_CLASS)
    TITLE.classList.toggle(DARK_MODE_CLASS)
    FOOTER.classList.toggle(DARK_MODE_CLASS)
    BUTTON.classList.toggle(DARK_MODE_CLASS)
    toggleTitle()
}

function toggleTitle(){
    if(TITLE.classList.contains(DARK_MODE_CLASS)){
        TITLE.innerHTML = "Dark Mode ON"
        BUTTON.innerHTML = "Light Mode"
        return;
    }
    TITLE.innerHTML = "Light Mode ON",
    BUTTON.innerHTML = "Dark Mode"
    return;
}
