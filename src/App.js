import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import PriceContext from "./components/PriceGenerator";

function App() {
  const [price] = useContext(PriceContext);
  const [openPrice, setOpenPrice] = useState(false);
  const [viewedPrice, setViewedPrice] = useState(false);

  useEffect(() => {
    if (openPrice) {
      if (window.gtag) {
        window.gtag("event", "price_click", {
          price,
        });
      }
      setViewedPrice(true);
    }
  }, [openPrice, price]);
  return (
    <div className="App">
      <Hero openPrice={openPrice} setOpenPrice={setOpenPrice} viewedPrice={viewedPrice} />
      <Intro />
      <Features />
      <Testimonial />
      <Footer openPrice={openPrice} setOpenPrice={setOpenPrice} viewedPrice={viewedPrice} />
    </div>
  );
}

export default App;
