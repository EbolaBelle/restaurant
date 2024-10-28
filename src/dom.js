
function cleanSlate(wrapper) {
    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.lastChild);
    }
}

function displayHomePage(wrapper) {
    const H1 = document.createElement('h1');
    const H3 = document.createElement('h3');
    const para = document.createElement('p');
    H1.textContent = "LouCorp Canteen";
    H1.classList.add('H1')
    wrapper.appendChild(H1);
    H3.textContent = "Proudly serving Kentuckiana since 1992";
    H3.classList.add('H3');
    wrapper.appendChild(H3);
    para.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. At unde porro amet suscipit voluptatum ipsum vitae, ex cupiditate! Atque consectetur provident maiores tempore nulla numquam asperiores voluptate placeat magni nobis!"
    para.classList.add('blurb');
    wrapper.appendChild(para);
}

export { displayHomePage, cleanSlate };