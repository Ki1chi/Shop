import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


function Shop() {
    const [productTitle, setProductTitle] = useState(null)
    const [productImg, setProductImg] = useState(null)
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
              const productImage = await data.map((product) => product.image)
              setProductImg(productImage[1])
              setProductTitle(productName[1])
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
        <div className="productContainer">
        <div>product name = {productTitle}</div>
        <img src={productImg} alt="" />
        </div>

    </>
    )
}
export default Shop 