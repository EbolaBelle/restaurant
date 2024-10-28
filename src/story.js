const displayStory = function(wrapper) {
    const header = document.createElement('h1');
    const body = document.createElement('p');

    header.textContent = "Our Story";
    body.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. At unde porro amet suscipit voluptatum ipsum vitae, ex cupiditate! Atque consectetur provident maiores tempore nulla numquam asperiores voluptate placeat magni nobis! Lorem ipsum dolor sit amet consectetur adipisicing elit. At unde porro amet suscipit voluptatum ipsum vitae, ex cupiditate! Atque consectetur provident maiores tempore nulla numquam asperiores voluptate placeat magni nobis!"
    wrapper.appendChild(header);
    wrapper.appendChild(body);
}

export { displayStory };