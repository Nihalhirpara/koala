import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      {/* <Register/> */}
    </BrowserRouter>
  </StrictMode>
);
