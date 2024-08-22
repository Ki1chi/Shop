import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import { handleClick } from "./utils"




function Shop() {
    // This is the setstate for products information
    const [product, setProduct] = useState(null);
    const [cart, setCart] = useState(0);
    


    // Function to fetch from API
    useEffect (()=> {
        async function fetchData() {
            try {
              const response = await fetch('https://fakestoreapi.com/products');
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const data = await response.json();
              // This function is to map out the product information from the API call
              console.log(data)
              setProduct(data.map((product: any) => {
                return <li key={product.id}>
                  <main className="item">
                  <img src={product.image} alt={product.title} className='productimg'/>
                    {/* <p>
                      Id {product.id}
                    </p> */}
                    <p>
                      {product.title}
                    </p>
                    <p className="price">
                      Price: {product.price}
                    </p>
                    <p>
                      <button className="addbtn" onClick={handleClick}>Add to Cart</button>
                    </p>
                    </main>
                </li> 
                }))
            } catch (error) {
              console.error('There has been a problem with your fetch operation:', error);
            }
          }
          fetchData();
          function handleClick() {
            setCart(cart + 1);
            console.log("count")
          }
          
    }, [cart])
    
    
    return (
    <>
        <header className="header-shop">
          <div className="headerforcart">
            <h2 className="shop-main">ショップ</h2>
            <h2>カート アイテム：{cart}</h2>
          </div>
          <Link to="/" className="shop-link">ホーム</Link></header>
        <div className="shop-text">ようこそ店え</div>
        <main>  
        <div className="listcontainer">
          <ul className="list">{product}</ul>
        </div>
        </main>
        <footer className="shop-link">
        <Link to="/" >ホーム</Link>
        </footer>
    </>
    )
}
export default Shop 