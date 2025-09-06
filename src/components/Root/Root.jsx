import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
