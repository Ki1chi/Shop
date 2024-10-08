
import {  Outlet } from "react-router-dom";

import { useEffect, useState } from "react";


// const cartArr: any = [];


function App() {
  
  // This is the setstate for products information
    const [product, setProduct] = useState(null);
    // This is the setstate for cart Number of items
    const [cart, setCart] = useState(0);
    // This is the setstate for cart items
    const [cartItems, setCartItems] = useState([]);
    const [cartPrice] = useState([]);
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
                        // This onclick will add the clicked product into an array and also update the cart number
                        cartItems.push(product)
                        cartPrice.push(product.price);
                        console.log(cartPrice)
                        setCartItems(cartItems)
                        setCart(cartItems.length)
                        console.log(cartItems)
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

          
    }, [cart, cartItems, cartPrice])
  
  
  return (
  <>
  <Outlet context ={{product, cart, cartItems, cartPrice}}/>
  </>
  )
}

export default App
