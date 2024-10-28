import { displayHomePage, cleanSlate } from "./dom.js";
import { displayMenu } from "./menu.js"

const wrapper = document.getElementById('content');
const home = document.getElementById('home');
const menu = document.getElementById('menu');

displayHomePage(wrapper);

home.addEventListener('click', () => {
    cleanSlate(wrapper);
    displayHomePage(wrapper);
})
menu.addEventListener('click', () => {
    cleanSlate(wrapper)
    displayMenu(wrapper)
});