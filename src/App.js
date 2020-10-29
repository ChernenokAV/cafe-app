import React from "react";
import ReactDom from "react-dom";
import Header from "./components/Header";
import Main from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
