import { displayHomePage, cleanSlate } from "./dom.js";
import { displayMenu } from "./menu.js";
import { displayStory } from "./story.js";

const wrapper = document.getElementById('content');
const home = document.getElementById('home');
const menu = document.getElementById('menu');
const story = document.getElementById('story');

displayHomePage(wrapper);

home.addEventListener('click', () => {
    cleanSlate(wrapper);
    displayHomePage(wrapper);
})
menu.addEventListener('click', () => {
    cleanSlate(wrapper)
    displayMenu(wrapper)
});

story.addEventListener('click', () => {
    cleanSlate(wrapper);
    displayStory(wrapper);
})