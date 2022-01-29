import React, {useState,useEffect} from 'react';
// import "./index.css"
import ReactGlobe from "react-globe";
import backgroundImage  from "./textures/background.png"
import earthImage  from "./textures/earth-large.jpg"
import cloudImage from "./textures/clouds-large.jpg"
import bumpImage from "./textures/bump-large.jpg"
import particle from "./textures/particle.png"
export default ()=> {
  const markers = [
    {
       id: 'marker1',
       city: 'Loretto',
       color: 'gold',
       coordinates: [37.6335736,-85.4130675],
       value: 10,
     },
     {
       id: 'marker2',
       city: 'Clermont',
       color: 'gold',
       coordinates: [37.9298019,-85.6614903],
       value: 10,
     },
     {
       id: 'marker3',
       city: 'Tennessee',
       color: 'gold',
       coordinates: [35.8141315,-88.2220562],
       value: 10,
     },
     {
       id: 'marker4',
       city: 'Calgary',
       color: 'gold',
       coordinates: [51.0277202,-114.3680139],
       value: 10,
     },
     {
       id: 'marker5',
       city: 'Gimli',
       color: 'gold',
       coordinates: [10.6329514,-96.9936046],
       value: 10,
     },
     {
       id: 'marker6',
       city: ' Windsor',
       color: 'gold',
       coordinates: [42.2951067,-83.0729219],
       value: 10,
     },
     {
       id: 'marker7',
       city: ' El Alto',
       color: 'gold',
       coordinates: [20.5530788,-102.5316817],
       value: 10,
     },
     {
       id: 'marker8',
       city: 'Tequila',
       color: 'gold',
       coordinates: [20.5530788,-102.5316817],
       value: 10,
     },
     {
       id: 'marker9',
       city: ' Cachaca	Salinas	Brazil	',
       color: 'gold',
       coordinates: [-16.1646482,-42.3140234],
       value: 10,
     },
     {
       id: 'marker10',
       city: ' Monte Alegre Do Sul	Brazil	',
       color: 'gold',
       coordinates: [-22.6853324,-46.6984446],
       value: 10,
     },
     {
      id: 'marker11',
      city: 'Maipu',
      color: 'gold',
      coordinates: [-32.9653462,-68.8199389],
      value: 10,
    },
    {
      id: 'marker12',
      city: 'Elqui',
      color: 'gold',
      coordinates: [-29.7753646,-71.3024869],
      value: 10,
    },
    {
      id: 'marker13',
      city: 'Kingston',
      color: 'gold',
      coordinates: [18.0180148,-76.8356758],
      value: 10,
    },
    {
      id: 'marker14',
      city: 'Cardenas',
      color: 'gold',
      coordinates: [23.0374078,-81.22675],
      value: 10,
    },
    {
      id: 'marker15',
      city: 'Zacapa',
      color: 'gold',
      coordinates: [57.4479529,-3.1381903],
      value: 10,
    },
    {
      id: 'marker16',
      city: ' Dufftown',
      color: 'gold',
      coordinates: [42.2951067,-83.0729219],
      value: 10,
    },
    {
      id: 'marker17',
      city: ' Carbost',
      color: 'gold',
      coordinates: [57.2999647,-6.3545429],
      value: 10,
    },
    {
      id: 'marker18',
      city: 'Ardberg',
      color: 'gold',
      coordinates: [55.6419423,-6.1220798],
      value: 10,
    },
    {
      id: 'marker19',
      city: ' Kilmarnock',
      color: 'gold',
      coordinates: [55.6090662,-4.538283],
      value: 10,
    },
    {
      id: 'marker20',
      city: 'Keith',
      color: 'gold',
      coordinates: [57.5423485,-2.9709663],
      value: 10,
    },
    {
      id: 'marker21',
      city: 'County Cork',
      color: 'gold',
      coordinates: [51.9034452,-9.5999206],
      value: 10,
    },
    {
      id: 'marker22',
      city: 'Bushmills',
      color: 'gold',
      coordinates: [55.2014017,-6.5296096],
      value: 10,
    },
    {
      id: 'marker23',
      city: 'Whitchurch',
      color: 'gold',
      coordinates: [52.9695387,-2.70118],
      value: 10,
    },
    {
      id: 'marker24',
      city: 'London',
      color: 'gold',
      coordinates: [51.5287718,-0.2416813],
      value: 10,
    },
    {
      id: 'marker25',
      city: 'Cognac',
      color: 'gold',
      coordinates: [45.6960596,-0.3551489],
      value: 10,
    },
    {
      id: 'marker26',
      city: ' Rouillac',
      color: 'gold',
      coordinates: [45.7937895,-0.1429403],
      value: 10,
    },
    {
      id: 'marker27',
      city: ' Jerez De La Frontera',
      color: 'gold',
      coordinates: [36.6876388,-6.1404949],
      value: 10,
    },
    {
      id: 'marker28',
      city: 'Douro',
      color: 'gold',
      coordinates: [41.1703356,-7.5849991],
      value: 10,
    },
    {
      id: 'marker29',
      city: ' Novara',
      color: 'gold',
      coordinates: [	45.5843333,8.2965636],
      value: 10,
    },
    {
      id: 'marker30',
      city: 'Veneto',
      color: 'gold',
      coordinates: [45.7322823,10.7409054],
      value: 10,
    },
    {
      id: 'marker31',
      city: 'Siedlce',
      color: 'gold',
      coordinates: [52.1616934,22.241703],
      value: 10,
    },
    {
      id: 'marker32',
      city: 'Poznan',
      color: 'gold',
      coordinates: [52.4006553,16.7615834],
      value: 10,
    },
    {
      id: 'marker33',
      city: 'Wolfenbuttel',
      color: 'gold',
      coordinates: [52.1722578,10.4682936],
      value: 10,
    },
    {
      id: 'marker34',
      city: 'Koskenkorva',
      color: 'gold',
      coordinates: [62.6909911,22.4451737],
      value: 10,
    },
    {
      id: 'marker35',
      city: 'Ahus',
      color: 'gold',
      coordinates: [55.9264381,14.2625262],
      value: 10,
    },
    {
      id: 'marker36',
      city: ' Aalborg',
      color: 'gold',
      coordinates: [57.0269106,9.8377346],
      value: 10,
    },
    {
      id: 'marker37',
      city: 'Karlovy Vary',
      color: 'gold',
      coordinates: [50.2169842,12.7942749],
      value: 10,
    },
    {
      id: 'marker38',
      city: 'Budapest',
      color: 'gold',
      coordinates: [47.4813602,18.9902198],
      value: 10,
    },
    {
      id: 'marker39',
      city: ' Moscow',
      color: 'gold',
      coordinates: [55.5815244,36.8251261],
      value: 10,
    },
    {
      id: 'marker40',
      city: 'Saint Petersburg',
      color: 'gold',
      coordinates: [59.9399139,29.534286],
      value: 10,
    },
    {
       id: 'marker41',
       city: 'Moscow',
       color: 'gold',
       coordinates: [	55.5815244,36.8251261],
       value: 10,
     },
     {
       id: 'marker42',
       city: 'Bundaberg',
       color: 'gold',
       coordinates: [-24.8676682,152.3474934],
       value: 10,
     },
     {
       id: 'marker43',
       city: 'Niigata',
       color: 'gold',
       coordinates: [37.8405505,138.8855481],
       value: 10,
     },
     {
       id: 'marker44',
       city: 'Shimamoto',
       color: 'gold',
       coordinates: [34.902421,135.6203483],
       value: 10,
     },
     {
       id: 'marker45',
       city: 'Hakushucho Shirasu',
       color: 'gold',
       coordinates: [35.7988292,138.229026],
       value: 10,
     },
     {
       id: 'marker46',
       city: ' Gyeongsangnam Do',
       color: 'gold',
       coordinates: [	35.1813852,127.8306014],
       value: 10,
     },
     {
       id: 'marker47',
       city: 'Maotai',
       color: 'gold',
       coordinates: [	27.8521002,106.3668182],
       value: 10,
     },
     {
       id: 'marker48',
       city: 'Yibin',
       color: 'gold',
       coordinates: [28.7707239,104.5595754],
       value: 10,
     },
     {
       id: 'marker49',
       city: ' Beijing',
       color: 'gold',
       coordinates: [39.9390731,116.1172741],
       value: 10,
     },
     {
       id: 'marker50',
       city: 'Luzhou',
       color: 'gold',
       coordinates: 	[28.8806979,105.3853202],
       value: 10,
     },
     {
       id: 'marker51',
       city: 'Kasauli',
       color: 'gold',
       coordinates: 	[30.8996091,76.9590997],
       value: 10,
     }
 ];

  // simple and extensive options to configure globe
  const options = {
    // ambientLightColor: 'gold',
    cameraRotateSpeed: 0.8,
    focusAnimationDuration: 2000,
    // focusEasingFunction: ['Linear', 'None'],
    // pointLightColor: 'gold',
    // pointLightIntensity: 1.5,
    // globeGlowColor: 'blue',
    markerTooltipRenderer: marker => `${marker.city} (${marker.value})`,
  };

  const [globe, setGlobe] = useState(null);
  console.log(globe); // captured globe instance with API methods

  return (
    <>
      <ReactGlobe
      height="100vh"
      globeBackgroundTexture={backgroundImage}
      globeCloudsTexture={cloudImage}
      globeTexture={earthImage}
      // initialCoordinates={[1.3521, 103.8198]}
      markers={markers}
      options={options}
      width="100%"
      // onClickMarker={(marker, markerObject, event) => console.log(marker, markerObject, event)}s
      onGetGlobe={setGlobe}
      // onMouseOutMarker={(marker, markerObject, event) => console.log(marker, markerObject, event)}
      // onGlobeTextureLoaded={() => console.log('globe loaded')}
      // onMouseOverMarker={(marker, markerObject, event) => console.log(marker, markerObject, event)}
    ></ReactGlobe>
    
      {/* <ReactGlobe
        height="100vh"
        globeTexture={}
        // markers={markers}
        width="100vw"
        // options={options}
      /> */}
    </>
  );
}