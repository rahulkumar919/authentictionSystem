import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import router from "./Router/router.jsx";
import { RouterProvider } from "react-router-dom";
import React from "react";
import { ClerkProvider } from "@clerk/clerk-react";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

  if (!PUBLISHABLE_KEY) {
    throw new Error('Add your Clerk Publishable Key to the .env file')
  }

createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey="pk_test_cHJpbWFyeS1iYXJuYWNsZS0zOC5jbGVyay5hY2NvdW50cy5kZXYk">
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </ClerkProvider>,
);
