import { createContext, useState } from "react";
import { productsArray, getProductsData } from "./stripeFunctions";

const cartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneToCart: () => {},
    deleteFromCart: () => {},
    GetTotalCost: () => {},
});

export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([]);

    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;

        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }

    function addOneToCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 0) {
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity:1
                    }
                ]
            cartProducts.filter(createRoutesFromElements)
            )
        } else {
            setCartProducts(
                cartProducts.map(
                    product => 
                    product.id === id 
                    ?{...product, quantity: product.quantity + 1}
                    : product
                )
            )
        }
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if(quantity == 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id

                    ? { ...product, quantity: product.quantity - 1 }
                    : product
                )
            )
        }
    }

    function deleteFromCart(id) {
        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct.id != id;
            })
        )
    }

    function GetTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductsData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity);
        })
        return totalCost;
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        AddOneToCart,
        removeOneFromCart, 
        deleteFromCart,
        GetTotalCost
    }

    return (
        <cartContext.Provider value={contextValue}>
            {children}
        </cartContext.Provider>
    )
}