import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@chakra-ui/react/preset";

import "./index.css";
import App from "./App.jsx";
import { DarkModeProvider } from "./components/DarkModeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider value={system}>
        <DarkModeProvider>
          <App />
        </DarkModeProvider>
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
