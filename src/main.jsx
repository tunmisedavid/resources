import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@chakra-ui/react/preset";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
