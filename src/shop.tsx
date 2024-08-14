import { Link } from "react-router-dom";

function Shop() {

    async function fetchData() {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log(data);
          const productName = await data.map((product) => product.title)
          console.log(productName)
        } catch (error) {
          console.error('There has been a problem with your fetch operation:', error);
        }
      }
      fetchData();

    return (
    <>
        <div>Shop</div>
        <p>this is the shop page</p>
        <div></div>
        <Link to="/">Home page</Link>
    </>
    )
}
export default Shop 