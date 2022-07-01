import React, { useState } from "react";
import styles from "./styles.module.css";
import ProductCard from "../../components/Card/Product-Card";
import Sidebar from "../../components/Sidebar/Sidebar";

function Home() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className={styles.container}>
      <button onClick={() => setOpenSidebar(true)}>Sidebar</button>
      <Sidebar
        openSidebar={openSidebar}
        handleClose={() => setOpenSidebar(false)}
      />
      <div className={styles.wrapper}>
        <ProductCard
          imgSrc="https://a-static.mlcdn.com.br/800x560/imac-27-apple-intel-core-i5-8gb-512gb-ssd-prateado/magazineluiza/226883300/b71738733735f8968100cbe86f589b30.jpg"
          imgAlt="Imac"
          productName="iMac 27” Apple Intel Core i5 8GB 512GB SSD - Prateado"
        />
      </div>
    </div>
  );
}
export default Home;
