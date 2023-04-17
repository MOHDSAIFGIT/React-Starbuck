import React from "react";
import Header from "./components/header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/header/header.css";
import Green_header from "./components/green_header/green_header";
import Bestseller from "./components/Bestseller/Bestseller";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <Header />
      <Green_header />
      <Bestseller />
      <Footer />
    </div>
  );
}

export default App;
