import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useOutletContext } from 'react-router-dom';
import  { addPrice, roundUpMoney } from './utils'


function Cart() {
    const [cartItem, setCartItem] = useState([]);
    // Used outletcontext to bring state from App component
    const { cart } = useOutletContext();
    const { cartItems } = useOutletContext();
    const { cartPrice } = useOutletContext();

    // This function will display all the items in the cart
    useEffect(()=> {
        setCartItem(cartItems.map((product: any) => {
        return <li key = {product.id} className="cart-item">
            <img  className="cart-img" src={product.image} alt=""/>
            <div className="cart-detail">
            {/* <p>{product.id}</p> */}
            <div>{product.title}</div>
            <p className="price">{(product.price)}</p>
            </div>
        </li>
    }))
},[cartItems])


    return (
        <>
        <header className="cart-header">
        <Link to="/home" className="header-link">Home</Link>
        <div className="cart-header-text">Cart</div>
        <Link to="/Shop" className="header-link">Shop</Link>
        </header>
        <main>
        <h1 className="cart-main-text"> {cart}</h1>
        <div className="cart-items">
        <ul>{cartItem}</ul>
        </div>
        <div className="total">Total: {roundUpMoney(addPrice(cartPrice))}</div>
        </main>
        <footer className="cart-footer">
            <button className="buy" onClick={() => {
                location.reload();
            }}>Buy</button>
        </footer>
        </>
    )
};

export default Cart