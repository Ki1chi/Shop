import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { handleCart} from "./utils"


const cartArr = [];

function Shop() {
    // This is the setstate for products information
    const [product, setProduct] = useState(null);
    // This is the setstate for cart items
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
              // console.log(data)
              setProduct(data.map((product: any) => {
                return <li key={product.id}>
                  <div className="item">
                  <img src={product.image} alt={product.title} className='productimg'/>
                    <p>
                      {product.title}
                    </p>
                    <p className="price">
                      Price: {product.price}
                    </p>
                    <p>
                      <button className="addbtn" onClick={function handleClick() {
                        setCart(cart + 1)
                        cartArr.push(product)
                        console.log(cartArr)
                        // handleCart(product);
                      }}>Add to Cart</button>
                    </p>
                    </div>
                </li> 
                }))
            } catch (error) {
              console.error('There has been a problem with your fetch operation:', error);
            }
          }
          fetchData();

          
    }, [cart])
    
    
    return (
    <>
        <header className="header-shop">
          <div className="headerforcart">
            <h2 className="shop-main">ショップ</h2>
            <h2 className="cartbtn">カート アイテム：{cart}</h2>
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