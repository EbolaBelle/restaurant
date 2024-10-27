import { displayHomePage, menuBuilder } from "./dom.js";

displayHomePage();

const home = document.getElementById('home');
const menu = document.getElementById('menu');

home.addEventListener('click', displayHomePage);
menu.addEventListener('click', menuBuilder);