import { Link, Outlet } from "react-router-dom";

// import { useEffect, useState } from "react";

import { useOutletContext } from 'react-router-dom';





function Shop() {
  const { product } = useOutletContext();
  const { cart } = useOutletContext();
    
    return (
    <>
        <header className="header-shop">
          <div className="headerforcart">
          <Link to="/home" className="shop-link">ホーム</Link>
            <h2 className="shop-main">ショップ</h2>
            <h2 className="cartbtn">カート アイテム：{cart}</h2>
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
        <Link to="/home" >ホーム</Link>
        </footer>
    </>
    )
}
export default Shop 
