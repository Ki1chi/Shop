import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


function Shop() {
    const [data, setData] = useState(null);
    const [product, setProduct] = useState(null);
    useEffect (()=> {
        async function fetchData() {
            try {
              const response = await fetch('https://fakestoreapi.com/products');
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const data = await response.json();
              setData(data);
              console.log(data)
              setProduct(data.map((product) => {
                return <li>
                  <img src={product.image} alt={product.title} className='productimg'/>
                    <p>
                      Product: {product.title}
                    </p>
                    <p>
                      Price: {product.price}
                    </p>
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
        <div>Shop</div>
        <p>this is the shop page</p>
        <div>
          <ul className="list">{product}</ul>
        </div>
        <Link to="/">Home page</Link>

    </>
    )
}
export default Shop 