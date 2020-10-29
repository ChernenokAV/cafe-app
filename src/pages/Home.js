import React from "react";
import ReactDom from "react-dom";
import Slider from "../components/Carousel";
import Data from "../database/Data";
import Sidebar from "../components/Sidebar";
import Restaurants from "../components/Restaurants";

function Home() {
  const data = Data;
  return (
    <main>
      <Slider />
      <div className="container">
        <div className="row">
          <Sidebar />
          <Restaurants />
        </div>
      </div>
    </main>
  );
}
export default Home;
