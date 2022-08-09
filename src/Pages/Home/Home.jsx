import React from "react";
import Header from "../../Components/Header/Header";
import CardComp from "../../Components/ CardComp";
 
function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <CardComp />
      </div>
    </div>
  );
}

export default Home;
