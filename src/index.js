import React from 'react'
import ReactDOM from "react-dom";
import { CartProvider } from "./contexts/CartContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import { SortFilterProvider } from "./contexts/SortFilterContext";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <CartProvider>
    <WishlistProvider>
      <SortFilterProvider>
        <Router>
          <App />
        </Router>
      </SortFilterProvider>
    </WishlistProvider>
  </CartProvider>,
  rootElement
);