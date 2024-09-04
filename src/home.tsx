
import { Link } from "react-router-dom";

import { useOutletContext } from 'react-router-dom';

function Home() {
    // Used outletcontext to bring state from App component
    const { cart }: any = useOutletContext();

    return (
        <>
        <header className="header">
        <Link to="/Shop" className="header-link">Shop</Link>
        <div className="header-miku">Miku Store</div>
        <Link to="/cart" className="cartbtn">Cart：{cart}</Link>
        </header>
        <main>
        
            <div className="main-text">
            Buy some cool stuff by visiting the shop page.
            </div>
            {/* <div className="homeimg"></div> */}
            <div className="imgcontainer">
            <img src="../src/assets/Hachune_Miku_infobox_size.webp" alt="hatsune miku green onion" className="img"/>
            </div>
            <div className="main-text">
            </div>
        </main>
        </>
    )

} 

export default Home