const  displayMenu = function(wrapper) {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    const descriptions = ["The Burrito Grande is a Tex Mex delight!", "Our regionally famous Margherita pizza will bring the whole family to tears.", "Bourbon slushie: need we say more?", "The Pride of the Bunch!"];
    const dishNames = ['Burrito Grande', 'Margherita', "Bourbon Slushie", "Grapes"];
    const prices = [8, 18, 14, 250];
    let menuArray = [];

    function createDishObject(name, description, price, id) {
        const dish = {
            name,
            description,
            price: '$' + price,
            id,
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
        card.classList.add('menu-card');
        menu.appendChild(card);
    }

    function populateMenuArray() {
        let newDish;
        for (let i = 0; i < dishNames.length; i++) {
            newDish = createDishObject(dishNames[i], descriptions[i], prices[i], `dish${i}`)
            menuArray.push(newDish);
        }
    }
    function assembleMenu() {        
        for (let i = 0; i < menuArray.length; i++) {
            createDishCard(menuArray[i]);
        }
        wrapper.appendChild(menu);
    }
    populateMenuArray();
    assembleMenu();
};

export { displayMenu };