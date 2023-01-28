const categories = document.querySelectorAll('.categories-item');
const products = document.querySelectorAll('.products-item');

categories.forEach(categorie => {
    categorie.addEventListener('click', (e) => {
        markActive(e.target);
        filterProducts(e.target.getAttribute('data-filter'));
    });
});

function markActive(target) {
    Array.from(categories).find(categorie => categorie.classList.contains('active')).classList.remove('active');
    target.classList.add('active');
}

function setDisplayNone() {
    products.forEach(product => {
        product.style.display = "none";
    });
}

function filterProducts(dataFilter) {
    setDisplayNone();
    products.forEach(async product => {
        if (product.getAttribute('data-filter') == dataFilter || dataFilter == null) {
            product.style.display = "block";
            await setAnimation(product);
        }
    });
}

function setAnimation(product) {
    return new Promise(resolve => {
        product.classList.add('show-product');
        setTimeout(() => {
            resolve(product.classList.remove('show-product'));
        }, 550);
    });
}
