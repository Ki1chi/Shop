import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useOutletContext } from 'react-router-dom';


function Cart() {
    const [cartItem, setCartItem] = useState([]);
    // Used outletcontext to bring state from App component
    const { cart } = useOutletContext();
    const { cartItems } = useOutletContext();

    // This function will display all the items in the cart
    useEffect(()=> {
        setCartItem(cartItems.map((product: any) => {
        return <li key = {product.id}>
            <p>{product.id}</p>
            <div>{product.title}</div>
            <p>{product.price}</p>
        </li>
    }))

},[])


    return (
        <>
        <header className="cart-header">
        <Link to="/home" className="header-link">Home</Link>
        <div className="cart-header-text">Cart</div>
        <Link to="/Shop" className="header-link">Shop</Link>
        </header>
        <main>
        <h1 className="cart-main-text"> Cart Items:{cart}</h1>
        <div>{cartItem}</div>
        </main>
        </>
    )
};

export default Cart