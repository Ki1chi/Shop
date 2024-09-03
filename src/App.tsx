
import {  Outlet } from "react-router-dom";

import { useEffect, useState } from "react";


const cartArr: any = [];

function App() {
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
                        // This onclick will add the clicked product into an array and 
                        // also update the cart number
                        cartArr.push(product)
                        setCart(cartArr.length)
                        console.log(cartArr)
                        
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
  <Outlet context ={{product, cart}}/>
  </>
  )
}

export default App
