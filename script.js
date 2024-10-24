const moreProducts = {
    'clothing': [
        {name: 'BUY', price: 'Rs 299', img: 'suit3.jpg', link: 'https://amzn.to/3NFvD06'},
        {name: 'BUY', price: 'Rs 309', img: 'suit4.jpg', link: 'https://amzn.to/3zZczXC'},
        {name: 'BUY', price: 'Rs 499', img: 'suit5.jpg', link: 'https://amzn.to/3NCfQ1V'}
    ],
    'watches': [
        {name: 'BUY', price: 'Rs 164', img: 'watch3.jpg', link: 'https://amzn.to/4fiOJoq'},
        {name: 'BUY', price: 'Rs 160', img: 'watch4.jpg', link: 'https://amzn.to/4dYg3re'},
        {name: 'BUY', price: 'Rs 199', img: 'watch5.jpg', link: 'https://amzn.to/3YmuOOu'}
    ],
    'perfumes': [
        {name: 'BUY', price: 'Rs 390', img: 'perfume3.webp', link: 'https://amzn.to/40AJrAT'},
        {name: 'BUY', price: 'Rs 399', img: 'perfume4.webp', link: 'https://amzn.to/4fjBAvE'},
        {name: 'BUY', price: 'Rs 375', img: 'perfume5.webp', link: 'https://amzn.to/3NKkGdv'}
    ],
};

let productsShown = {};

function toggleProducts(category) {
    const productContainer = document.getElementById(`${category}-products`);
    const button = document.querySelector(`#${category} .toggle-products`);

    if (!productsShown[category]) {
        moreProducts[category].forEach(product => {
            const productCard = `
                <div class="card">
                    <img src="${product.img}" alt="${product.name}">
                    <h3><a href="${product.link}">${product.name}</a></h3>
                    <p>Price: ${product.price}</p>
                    <button onclick="contactMe('${product.name}')">Contact Me on WhatsApp</button>
                </div>
            `;
            productContainer.insertAdjacentHTML('beforeend', productCard);
        });
        button.innerText = "Show Less";
        productsShown[category] = true;
    } else {
        const extraProducts = productContainer.querySelectorAll('.card:nth-child(n+3)');
        extraProducts.forEach(product => product.remove());
        button.innerText = "Show More";
        productsShown[category] = false;
    }
}

function contactMe(product) {
    const message = `I'm interested in the ${product}. Please contact me.`;
    const phoneNumber = '7055063850';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}