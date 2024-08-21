import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


function Shop() {
    // This is the setstate for products information
    const [product, setProduct] = useState(null);

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
                    <p style={{color:"red"}}>
                      Price: {product.price}
                    </p>
                    <p>
                      <button>Add to Cart</button>
                    </p>
                    </main>
                </li>
                }))
            } catch (error) {
              console.error('There has been a problem with your fetch operation:', error);
            }
          }
          fetchData();
    }, [])
    
    
    return (
    <>
        <header className="header-shop">Shop</header>
        <div className="shop-text">this is the shop page</div>
        <main>  
        <div className="listcontainer">
          <ul className="list">{product}</ul>
        </div>
        </main>
        <Link to="/" className="shop-link">Home page</Link>
    </>
    )
}
export default Shop 