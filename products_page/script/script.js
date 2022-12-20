const root = document.querySelector('.root');

function createCard (title, price, image){
    const container = document.createElement('p');
    const title_p = document.createElement('p');
    const price_p = document.createElement('p');
    const img = document.createElement('img');
    container.classList.add('card');
    title_p.classList.add('title')

    title_p.innerText = title;
    price_p.innerText = `${price} $`;
    img.src = image;

    container.append(title_p,price_p, img)
    root.append(container)
}

function getProducts(){
    fetch(`https://fakestoreapi.com/products`)
    .then(resp => resp.json())
    .then(data => { 
        data.forEach(({title, price, image}) => {createCard(title, price, image)});
})
}

getProducts()