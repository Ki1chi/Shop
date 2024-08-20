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
                    <p>
                      Id {product.id}
                    </p>
                    <p>
                      Product: {product.title}
                    </p>
                    <p>
                      Price: {product.price}
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
        <div>Shop</div>
        <p>this is the shop page</p>
        <Link to="/">Home page</Link>
        <div className="listcontainer">
          <ul className="list">{product}</ul>
        </div>
    </>
    )
}
export default Shop 