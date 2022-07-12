import React, { useState } from "react";
import ProductCard from "../../components/Card/Product-Card";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Header, HamburguerIcon, Wrapper } from "./home.styles";
import InputSearch from "../../components/Input-search/Input-search";

function Home() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [searchField, setSearchField] = useState("");
  return (
    <>
      <Header>
        <HamburguerIcon onClick={() => setOpenSidebar(true)} />
        <Sidebar
          openSidebar={openSidebar}
          handleClose={() => setOpenSidebar(false)}
        />
      <InputSearch handleOnChange={event => setSearchField(event.target.value)} textField={searchField} />
      </Header>
      <Wrapper>
        <ProductCard
          imgSrc="https://a-static.mlcdn.com.br/800x560/imac-27-apple-intel-core-i5-8gb-512gb-ssd-prateado/magazineluiza/226883300/b71738733735f8968100cbe86f589b30.jpg"
          imgAlt="Imac"
          productName="iMac 27” Apple Intel Core i5 8GB 512GB SSD - Prateado"
        />
        <ProductCard
          imgSrc="https://a-static.mlcdn.com.br/800x560/imac-27-apple-intel-core-i5-8gb-512gb-ssd-prateado/magazineluiza/226883300/b71738733735f8968100cbe86f589b30.jpg"
          imgAlt="Imac"
          productName="iMac 27” Apple Intel Core i5 8GB 512GB SSD - Prateado"
        />
        <ProductCard
          imgSrc="https://a-static.mlcdn.com.br/800x560/imac-27-apple-intel-core-i5-8gb-512gb-ssd-prateado/magazineluiza/226883300/b71738733735f8968100cbe86f589b30.jpg"
          imgAlt="Imac"
          productName="iMac 27” Apple Intel Core i5 8GB 512GB SSD - Prateado"
        />
      </Wrapper>
    </>
  );
}
export default Home;