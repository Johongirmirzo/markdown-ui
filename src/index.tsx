import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import AuthContextProvider from "./context/AuthContext";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
