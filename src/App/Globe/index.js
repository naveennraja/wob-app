import React, {useState, useEffect} from 'react';
import ReactGlobe from "react-globe";
import backgroundImage  from "./textures/background.png"
import earthImage  from "./textures/earth-large.jpg"
import cloudImage from "./textures/clouds-large.jpg"
import bumpImage from "./textures/bump-large.jpg"
import markerImage from "./textures/markers.png"
import particle from "./textures/particle.png"
import * as THREE from "three";

import Markers from './Markers';
export default ()=> {
  const [marker,setMarkers]= useState(null);
  useEffect(() => {
    setMarkers(Markers);
   
  },[Markers]);

  const options = {
    // ambientLightColor: 'gold',
    cameraAutoRotateSpeed: 0.3,
    cameraRotateSpeed: 0.1,
    enableCameraAutoRotate: true,
    enableCameraRotate: true,
    globeCloudsOpacity: 0.1,
    globeGlowRadiusScale: 0,
    
    enableMarkerTooltip: true,
    markerEnterAnimationDuration: 2e3,
    markerEnterEasingFunction: ['Bounce', 'InOut'],
    markerExitAnimationDuration: 2e3,
    markerExitEasingFunction: ['Cubic', 'Out'],
    markerRenderer: marker => {
      const textureImage = new THREE.TextureLoader().load(markerImage);
      const geometry = new	 THREE.CircleGeometry( 3,50,0);
      const material = new THREE.MeshBasicMaterial( { map: textureImage, side: THREE.DoubleSide } );
        return new THREE.Mesh(geometry, material);
    },
    markerTooltipRenderer: marker => `${marker.city} (${marker.value})`,
    // markerRadiusScaleRange: [0.01, 0.05],
  };

  const [globe, setGlobe] = useState(null);

  if(globe !== null){
    globe.resize({ height: "100%", width: "100%" })
    // const {clouds} = globe.earth;
    // console.log("cloud",clouds.material)
    // clouds.material.transparent = true;
  }
   return (
   marker && (
    <>
      <div style={{width:"100%",height:"100%"}}>
      <ReactGlobe
        height="100vh"
        globeBackgroundTexture={backgroundImage}
        globeCloudsTexture={cloudImage}
        globeTexture={earthImage}
      // initialCoordinates={[1.3521, 103.8198]}
        markers={marker}
        options={options}
        width="100vw"
      // onClickMarker={(marker, markerObject, event) => console.log(marker, markerObject, event)}s
        onGetGlobe={setGlobe}
      // onMouseOutMarker={(marker, markerObject, event) => console.log(marker, markerObject, event)}
      //s onGlobeTextureLoaded={() => console.log('globe loaded')}
      // onMouseOverMarker={(marker, markerObject, event) => console.log(marker, markerObject, event)}
    ></ReactGlobe>
    </div>
    
      {/* <ReactGlobe
        height="100vh"
        globeTexture={}
        // markers={markers}
        width="100vw"
        // options={options}
      /> */}
    </>)
  );
}