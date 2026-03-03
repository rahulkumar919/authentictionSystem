import { createBrowserRouter } from "react-router";
import App from "../App";
import SignUp from "../Component/SignUp";
import LoginPage from "../Component/LoginPage";
import React from "react";
import OtpVerification from "../Pages/OtpVerification";
import HeaderLayout from "../Component/HeaderLayout";
import Header from "../Component/Header";
import Hero from "../Component/Hero";
import About from "../Pages/About";
import ForgtetPass from "../Pages/ForgtetPass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path : "/"  , element : <Hero/>} ,
      { path: "signup", element: <SignUp /> },
      { path: "login", element: <LoginPage/> },
      {path  :"about" , element : <About/>},
      {path : "forget-password" , element : <ForgtetPass/>}
     
  
    ],
  },
  { path: "*", element: <div>404 Not Found</div> },
  {path : "otp-verification", element: <OtpVerification/> }
]);

export default router; 
