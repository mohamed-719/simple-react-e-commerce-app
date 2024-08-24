import { Button } from "bootstrap";
import Product from "./Product";
import { useEffect, useState } from "react";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const api_url = "https://fakestoreapi.com/products/";
  // and used the fetch inter Hook is useEffect
  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const getProductInCategorey = (catName) => {
    console.log(catName);
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
    getCategories();
    // used the DependencyList []
  }, []);

  return (
    <>
      <h2 className="text-center">Our Products</h2>
      <div className="container">
      <button
              onClick={() => {
                getProducts();
              }}
              className="btn btn-info"
              
            >
              All
            </button>
        {categories.map((cat) => {
          return (
            <button
              onClick={() => {
                getProductInCategorey(cat);
              }}
              className="btn btn-info"
              key={cat}
            >
              {cat}
            </button>
          );
        })}
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <Product product={product} showButton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
