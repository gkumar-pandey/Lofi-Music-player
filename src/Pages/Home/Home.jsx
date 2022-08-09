import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import CardComp from "../../Components/ CardComp";
import data from "../../Assets/Data/Data";
import kya_mujhe_pyar_hai from "../../Assets/Music/ky-mujhe-pyar-hai.mpeg";

function Home() {
  const [pause, setpause] = useState();

  return (
    <div>
      <Header />
      <div className="container">
        <CardComp currPlayingSong={kya_mujhe_pyar_hai} />
      </div>
      <audio src={kya_mujhe_pyar_hai} controls autoPlay />
    </div>
  );
}

export default Home;
