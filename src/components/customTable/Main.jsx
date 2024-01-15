import React, { useEffect, useState } from "react";
import CustomTable from "./CustomTable";
const Main = () => {
  const [useData, setUserData] = useState(null);
  const [productData, setProductData] = useState(null);
  const [activeTab, setActiveTab] = useState("user");

  useEffect(() => {
    async function fetchUser() {
      try {
        let user = await fetch(`https://dummyjson.com/users`);
        if (!user.ok) {
          throw new Error("Network Error");
        }

        let userJson = await user.json();
        setUserData(userJson);
      } catch (error) {
        console.log(error);
      }
    }

    async function fetchProduct() {
      try {
        let productResponse = await fetch(`https://dummyjson.com/products`);
        if (!productResponse.ok) {
          throw new Error("Network Error");
        }

        let productJson = await productResponse.json();
        setProductData(productJson);
      } catch (error) {
        console.log(error);
      }
    }

    if (activeTab === "user") {
      // console.log("user");
      fetchUser();
    } else if (activeTab === "product") {
      // console.log("product");
      fetchProduct();
    }
  }, [activeTab]);

  console.log(productData);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div>
        <button onClick={() => handleTabClick("user")}>User</button>
        <button onClick={() => handleTabClick("product")}>Product</button>
        <h1>Custom Table Example</h1>
        {/* <CustomTable data={useData?.users} /> */}
        {activeTab === "user" && <CustomTable data={useData?.users} />}
        {activeTab === "product" && (
          <CustomTable data={productData?.products} />
        )}
      </div>
    </>
  );
};

export default Main;
