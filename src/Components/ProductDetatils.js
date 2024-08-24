import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Product from "./Product";

function ProductDetatils() {
  const [product, setProducts] = useState({});


  const api_url = "https://fakestoreapi.com/products"
  const params = useParams();
  console.log(params)


useEffect(() => {fetch(`${api_url}/${params.productId}`).then((res) => res.json()).then((product) => setProducts(product));},[] )


  return (
    <Product product={product}  />
  )
}


export default ProductDetatils;