const productDataApi = 'https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json';

async function showProducts(category) {
    const response = await fetch(productDataApi);
    const data = await response.json();

    const products = data[category];
    const productCardsContainer = document.getElementById('productCards');
    productCardsContainer.innerHTML = '';
    produc.array.forEach(element => {
        const productCards.classList.add('product-card');
        
    });
        
    }


}