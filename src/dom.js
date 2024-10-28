
function cleanSlate(wrapper) {
    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.lastChild);
    }
}

function displayHomePage(wrapper) {
    const drone = document.createElement('img');
    const H1 = document.createElement('h1');
    const H3 = document.createElement('h3');
    const para = document.createElement('p');
    drone.src = "https://ebolabelle.github.io/LC-WHQ/images/Drone_sm.webp";
    wrapper.appendChild(drone);
    H1.textContent = "LouCorp Canteen";
    wrapper.appendChild(H1);
    H3.textContent = "Proudly serving Kentuckiana since 1992";
    wrapper.appendChild(H3);
    para.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. At unde porro amet suscipit voluptatum ipsum vitae, ex cupiditate! Atque consectetur provident maiores tempore nulla numquam asperiores voluptate placeat magni nobis!"
    wrapper.appendChild(para);
}

export { displayHomePage, cleanSlate };