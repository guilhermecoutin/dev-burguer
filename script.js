const showMenu = document.querySelector('.show-menu')
const discountMenu = document.querySelector('.discount-menu')
const sumMenu = document.querySelector('.sum-menu')
const veganMenu = document.querySelector('.vegan-menu')
const list = document.querySelector('.list')

function convertValues(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value)
}

function diplayMenu(newMenu) {
    let myLi = ''

    newMenu.forEach(product => {
        myLi +=
            `
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">${convertValues(product.price)}</p>
        </li>
        `
        list.innerHTML = myLi
    });
}

function displayDiscountedMenu() {
    const discountItems = menuOptions.map(product => ({
        ...product,
        price: product.price - product.price * 0.1
    }))

    diplayMenu(discountItems)
}

function sumItemsMenu() {
    const sumPrices = menuOptions.reduce((acc, crr) => acc += crr.price, 0)
    list.innerHTML =
        `
        <li>
            <p>A soma total do Menu é de ${convertValues(sumPrices)}</p>
        </li>
    `
}

function veganItemsMenu() {
    const itemsVegan = menuOptions.filter(product => product.vegan)

    diplayMenu(itemsVegan)
}

showMenu.addEventListener('click', () => diplayMenu(menuOptions))
discountMenu.addEventListener('click', displayDiscountedMenu)
sumMenu.addEventListener('click', sumItemsMenu)
veganMenu.addEventListener('click', veganItemsMenu)