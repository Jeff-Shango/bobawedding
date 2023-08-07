
const productsArray = [
    {
        id: "1",
        title: "low: $20",
        price: 20
    },
    {
        id: "2",
        title: "medium: $50",
        price: 50
    },
    {
        id: "3",
        title: "high: $100",
        price: 100
    },
    // {
    //     id: "4",
    //     title: "custom",
    //     price: {}
    // },
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