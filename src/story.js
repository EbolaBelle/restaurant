const displayStory = function(wrapper) {
    const header = document.createElement('h1');
    header.classList.add('story-header');
    const body = document.createElement('p');
    body.classList.add('story');

    header.textContent = "Our Story";
    body.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. At unde porro amet suscipit voluptatum ipsum vitae, ex cupiditate! Atque consectetur provident maiores tempore nulla numquam asperiores voluptate placeat magni nobis! Lorem ipsum dolor sit amet consectetur adipisicing elit. At unde porro amet suscipit voluptatum ipsum vitae, ex cupiditate! Atque consectetur provident maiores tempore nulla numquam asperiores voluptate placeat magni nobis!"
    wrapper.appendChild(header);
    wrapper.appendChild(body);
}

export { displayStory };