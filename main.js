let openButton = document.querySelector("#openandclose_btn");
let closeButton = document.querySelector(".close_btn");
let popup = document.querySelector(".popup");
let mainPopup = document.querySelector(".main_popup");
let popupOverlay = document.querySelector(".popup_overlay");
let rem2 = "2rem"
/*  Arrow functions replace the traditional 
    word "function" and place an arrow between 
    the argument and opening body bracket. The body braces,
    the argument parenthese, and the word "return" is also
    removes - the return is implied. If there are no
    arguments, leave the argument parenthese blank. */

openButton.addEventListener('click', () => {
    popup.style.display = "flex";
    mainPopup.style.cssText = "animation:slide-in .5s ease; animation-fill-mode: forwards;";
    openButton.innerHTML = "&#60;";
    openButton.style.cssText = "animation:slide-in .5s ease; animation-fill-mode: forwards;";
    openButton.style.marginLeft = "20%";
});

closeButton.addEventListener("click", () => {
    mainPopup.style.cssText = "animation:slide-out .5s ease; animation-fill-mode: forwards";
    setTimeout(() => {
        popup.style.display = "none";
    }, 500);
    openButton.innerHTML = "&#62;";
    openButton.style.marginLeft = "0%";
});

window.addEventListener("click", (i) => {
    if (i.target == popupOverlay) {
            mainPopup.style.cssText = "animation:slide-out .5s ease; animation-fill-mode: forwards";
        setTimeout(() => {
            popup.style.display = "none";
        }, 500);
        openButton.innerHTML = "&#62;";
    }
    openButton.style.marginLeft = "0%";
});

