let toggleBtn;
let wrapper;
let menu;

/**
 * To create change between light/dark themes
 * clone UI
 * toggle between different UIs by removing/adding corresponding class with associated styles
 *
 */

function substituteBtns() {
  toggleBtn = document.querySelector(".toggle-btn");
  wrapper = document.querySelector(".wrapper");
  menu = document.querySelector(".menu");
}
const main = document.querySelector("main");
substituteBtns();

// user gets light theme by default
let darkTheme = false;

function toggleUI() {
  darkTheme = !darkTheme;
  console.log(darkTheme);
  // let's create a copy of the homepage as well as descendants of our elements
  // the copied UI will be layered over the previous UI depending on user preference
  let cloneUI = wrapper.cloneNode(true);
  if (darkTheme) {
    cloneUI.classList.remove("light");
    cloneUI.classList.add("dark");
  } else {
    cloneUI.classList.remove("dark");
    cloneUI.classList.add("light");
  }
  cloneUI.classList.add("copyUi");
  main.appendChild(cloneUI);
  // let's remove the scroll feature when switching themes
  // see CSS rules for removing scroll
  document.body.classList.add("stop-scrolling");

  cloneUI.addEventListener("animationend", () => {
    // let's add back the scroll feature when done switching themes
    document.body.classList.remove("stop-scrolling");
    wrapper.remove();
    cloneUI.classList.remove("copyUi");
    // reset variables
    substituteBtns();
    events();
  });
}

function events() {
  toggleBtn.addEventListener("click", toggleUI);
  menu.addEventListener("click", () => {
    wrapper.classList.toggle("active");
  });
}

events();
