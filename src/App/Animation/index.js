import React from "react";
// import "./index.css"
import "./index.css"

import CloudImage1 from "./Images/Page1/Cloud001.png";
import CloudImage2  from "./Images/Page1/Cloud002.png"
import refImage  from "./Images/Page1/ForReffComplete.jpg"
import cloudImage from "./Images/Page1/Layer001.jpg"
import Layer1 from "./Images/Page2/FullImage.jpg"
import Layer2 from "./Images/Page1/Layer002.png"
import Layer3 from "./Images/Page1/Layer003.png"
import Layer4 from "./Images/Page1/Layer004.png"
import Layer5 from "./Images/Page1/Layer005.png"

export default ()=> {

  return (
  <>
    <div className="cloudImage">
      <img src={refImage} className="refImage"></img>
      <div>Animation work in progress</div>
      <img src={Layer1} className="refImage"></img>
      <div>Animation work in progress</div>
    </div>
  </>
  );
}
//export default App;