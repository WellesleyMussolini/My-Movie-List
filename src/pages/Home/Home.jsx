import React from "react";
import ProductCard from "../../components/Card/Product-Card";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ProductCard
        imgSrc="https://a-static.mlcdn.com.br/800x560/imac-27-apple-intel-core-i5-8gb-512gb-ssd-prateado/magazineluiza/226883300/b71738733735f8968100cbe86f589b30.jpg"
        imgAlt="Imac"
        productName="iMac 27” Apple Intel Core i5 8GB 512GB SSD - Prateado"
      />
    </div>
  );
}
export default Home;
