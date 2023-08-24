const productsArray = [
    {
        id: "price_1NcWAtBsGKDDlKM9Gfb4zy6k",
        title: "low: $20",
        price: 20
    },
    {
        id: "price_1NcWDkBsGKDDlKM9v1a92ZxQ",
        title: "medium: $50",
        price: 50
    },
    {
        id: "price_1NcWFLBsGKDDlKM93yVykU3k",
        title: "high: $100",
        price: 100
    }
]

function getProductsData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductsData }