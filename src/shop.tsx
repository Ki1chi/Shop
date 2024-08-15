import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


function Shop() {
    const [productTitle, setProductTitle] = useState(null)
    useEffect (()=> {
        async function fetchData() {
            try {
              const response = await fetch('https://fakestoreapi.com/products');
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const data = await response.json();
              console.log(data);
              const productName = await data.map((product) => product.title)
              setProductTitle(productName[1])
              console.log(productName[1])
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
        <div>product name = {productTitle}</div>
        <Link to="/">Home page</Link>
    </>
    )
}
export default Shop 