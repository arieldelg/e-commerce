import React from "react";
import { createPortal } from "react-dom";

const ModalCheckout = ({ children }) => {
    return createPortal(
        <aside className="product-detail w-96 bg-white fixed top-10 right-0 border-black border rounded-tl-xl rounded-bl-xl">
            { children }
        </aside>,
        document.getElementById('checkout-menu')
    )
}

export { ModalCheckout }