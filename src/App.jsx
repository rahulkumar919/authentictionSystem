import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import React from "react";
import HeaderLayout from "./Component/HeaderLayout";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />

      <Header />
      
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
