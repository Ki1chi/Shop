import { Link } from "react-router-dom";
import { useOutletContext } from 'react-router-dom';

function Cart() {
    const { cart } = useOutletContext();
    const { cartItems } = useOutletContext();


    return (
        <>
        <header className="cart-header">
        <Link to="/home" className="header-link">Home</Link>
        <div className="cart-header-text">Cart</div>
        <Link to="/Shop" className="header-link">Shop</Link>
        </header>
        <main>
        <h1 className="cart-main-text"> Cart Items:{cart}</h1>
        <div>{}</div>
        </main>
        </>
    )
};

export default Cart