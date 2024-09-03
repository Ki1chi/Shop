
import { Link } from "react-router-dom";

import { useOutletContext } from 'react-router-dom';

function Home() {
    const { cart } = useOutletContext();

    return (
        <>
        <header className="header">
            <h1>Home</h1>
            <Link to="/cart" className="cartbtn">Cart：{cart}</Link>
        </header>
        <main>
        <div className="link-home"><Link to="/Shop">Shop</Link></div>
            <div className="main-text">
            Buy some cool stuff by visiting the shop page.
            </div>
            {/* <div className="homeimg"></div> */}
            <div className="imgcontainer">
            <img src="src/assets/Hachune_Miku_infobox_size.webp" alt="hatsune miku" className="img"/>
            </div>
            <div className="main-text">
            </div>
        </main>
        </>
    )

} 

export default Home