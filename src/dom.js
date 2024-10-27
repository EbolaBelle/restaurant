
const wrapper = document.getElementById('content');

function cleanSlate() {
    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.lastChild);
    }
}

const menuBuilder = function() {
    cleanSlate()
    const descriptions = ["The Burrito Grande is a Tex Mex delight!", "Our regionally famous Margherita pizza will bring the whole family to tears.", "Bourbon slushie: need we say more?"];

    function createDishObject(name, description, price, id) {
        const dish = {
            name: name,
            description: description,
            price: '$' + price,
            id: id,
        }
        return dish;
    }

    function createDishCard(dish) {
        const card = document.createElement('div');
        card.id = dish.id;
        const name = document.createElement('h3');
        name.textContent = dish.name;
        card.appendChild(name);
        const price = document.createElement('p');
        price.textContent = dish.price;
        card.appendChild(price);
        const describe = document.createElement('p');
        describe.textContent = dish.description;
        card.appendChild(describe);
        wrapper.appendChild(card);
    }
    const menuArray = [createDishObject('Burrito Grande', descriptions[0], 8, 0), createDishObject('Margherita', descriptions[1], 18, 1), createDishObject('Bourbon Slushie', descriptions[2], 14, 2)]
    for (let i = 0; i < menuArray.length; i++) {
        createDishCard(menuArray[i]);
    }
};

function displayHomePage() {
    cleanSlate();
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

function displayMenuPage() {
    const title = document.createElement('h1');

}

export { displayHomePage, menuBuilder };