import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { appsData, productsData } from "./data.js";
import Home from "./pages/Home";
import ProductsPage from "./pages/Products";
import AppsPage from "./pages/AppsPage";
import "./App.css";

export default function App() {
  const [products] = useState(productsData);
  const [apps] = useState(appsData);

  console.log({ products, apps });

  return (
    <div className="App">
      <header>
        <h1>Apple Shop</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/apps">Apps</Link> {/* link */}
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<ProductsPage products={products} />}
        />
        <Route path="/apps" element={<AppsPage apps={apps} />} />{" "}
        {/* route for Apps */}
      </Routes>
    </div>
  );
}
