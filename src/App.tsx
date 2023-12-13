import React from "react";
import "./App.scss";
import Home from "./components/Home/Home";
import Highlight01 from "./components/Highlights/Highlight01";
import Highlight02 from "./components/Highlights/Highlight02";
import Services from "./components/Market/Services";
import Products from "./components/Market/Products";

function App() {
  return (
    <>
      <Home />
      <Highlight01 />
      <Services />
      <Highlight02 />
      <Products />
    </>
  );
}

export default App;
