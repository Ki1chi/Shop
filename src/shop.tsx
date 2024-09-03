import { Link } from "react-router-dom";

import { useOutletContext } from 'react-router-dom';


function Shop() {
  const { product }  = useOutletContext();
  const { cart } = useOutletContext();
    
    return (
    <>
        <header className="header-shop">
          <div className="headerforcart">
          <Link to="/home" className="shop-link">Home</Link>
            <h2 className="shop-main"> Super Cool Shop</h2>
            <h2 className="cartbtn">Cart：{cart}</h2>
          </div>
          </header>
        <div className="shop-text">
        </div>
        <main>  
        <div className="listcontainer">
          <ul className="list">{ product }</ul>
        </div>
        </main>
        <footer className="shop-link">
        <Link to="/home" >Home</Link>
        </footer>
    </>
    )
}
export default Shop 
