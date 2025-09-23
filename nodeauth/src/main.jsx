// import "flowbite"; // Import Flowbite JavaScript
// import "flowbite/dist/flowbite.css"; // Import Flowbite CSS (if not handled by Tailwind)
// import axios from "axios";
// import customFetch from "../../utils/customFetch.js";

// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
    <ToastContainer position="top-center" />
  </>
);
