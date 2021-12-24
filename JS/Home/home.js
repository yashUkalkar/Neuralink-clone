

/* #region --Hero section */

//Menu card
const menu_btn = document.querySelector(".menu-btn");
const menu_board = document.querySelector(".menu-board");
const logo = document.querySelector(".cls-1");
const menu_line = document.querySelectorAll(".menu-btn .line");
const body = document.querySelector("body");
menu_btn.addEventListener('click', () => {
    if(menu_board.classList.contains("closed")){
        //If the menu was inactive before clicking

        menu_board.style.opacity = "1";
        menu_board.style.pointerEvents = "all";

        body.style.overflow = "hidden";

        logo.style.fill = "#858686";
        menu_line.forEach(line => {line.style.stroke = "#858686";});

        menu_board.classList.remove("closed");
        menu_board.classList.add("open");
    }
    else{
        //If the menu was active before clicking

        menu_board.style.opacity = "0";
        menu_board.style.pointerEvents = "none";

        body.style.overflow = "auto";
        body.style.overflowX = "hidden";

        logo.style.fill = "#fff";
        menu_line.forEach(line => {line.style.stroke = "#fff";});

        menu_board.classList.remove("open");
        menu_board.classList.add("closed");
    }
});

//Updates form
const mail_area = document.querySelector(".updates-form");
const form_underline = document.querySelector(".form-underline");
mail_area.addEventListener('mouseover', () => {
    form_underline.style.opacity = "1";
});
mail_area.addEventListener('mouseout', () => {
    form_underline.style.opacity = "0.3";
});

/* #endregion --Hero section */

