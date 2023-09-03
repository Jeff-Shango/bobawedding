import {Button, Navbar, Modal} from "react-bootstrap"
import { useState, useContext } from "react"
import React, { CartContext } from "../functions/CartContext.js";
import { CartProduct } from "../functions/CartProduct.js";

function NavbarComponent() {
    const cart = useContext(CartContext);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const checkout = async () => {
        await fetch('http://localhost:4000/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if(response.url) {
                window.location.assign(response.url);
            }
        })
    }

    const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return(
        <div id="navBar">
            <Navbar expand="sm" >
                <Navbar.Brand href="/">Donate</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Button onClick={handleShow}>Cart ({productCount}) Items</Button>

                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Registry Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productCount > 0 ?
                        <>
                        <p>Items in your cart:</p>
                        {cart.items.map((currentProduct, idx) => (
                            <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                        ))}

                        <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

                        <Button variant="success" onClick={checkout}>
                            Purchase Items!
                        </Button>
                        </>
                    : 
                    
                        <h1>There are no items in the cart</h1>
                    }
                </Modal.Body>
            </Modal>
        </div>
    )
}

export { NavbarComponent };