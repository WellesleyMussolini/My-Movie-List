import React, { useState } from "react";
import ProductCard from "../../components/Card/Product-Card";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Header, HamburguerIcon, SearchContainer, InputText, SearchIconStyled, Wrapper } from "./home.styles";

function Home() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <Header>
        <HamburguerIcon onClick={() => setOpenSidebar(true)} />
        <Sidebar
          openSidebar={openSidebar}
          handleClose={() => setOpenSidebar(false)}
        />
        <SearchContainer>
          <InputText type="search" placeholder="search..." />
          <SearchIconStyled />
        </SearchContainer>
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
