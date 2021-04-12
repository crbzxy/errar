import MaterialBola from "../img/material.jpg";
import Cielo from "../img/sky.jpeg";
import prevportal from "../img/Prevportal.png";
import Fondo from "../img/fondo.png";

require("aframe");
require("aframe-liquid-portal-shader");

function Errar() {
  return (
    <div className="Errar">
      <>
        <a-scene background="color: #ECECEC">
          <a-assets>
            <img id="sky" src={Cielo} alt="cielo" />
            <img id="my-texture" src={MaterialBola} alt="material" />
            <img id="fondo" src={Fondo} alt="fondo" />
            <img
              id="demo"
              alt="hola"
              src={prevportal}
              crossorigin="anonymous"
            />
          </a-assets>
          <a-camera position="0 2.8 1" rotation="26 50 0" />
          <a-sky src="#sky" rotation=" 0 260  0" opacity="0.9"></a-sky>

        

          <a-image
            src="#demo"
            material="shader: liquid-portal"
            scale="0.5 0.5"
            position="-1.3 2.49 -4.1"
          />

          <a-entity
            light="type:directional; castShadow:true;"
            position="0 8 14"
            intensity="0.5"
          />
          <a-entity
            light="type:directional; castShadow:true;"
            position="-2 8 -9"
            intensity="0.5"
          />
          <a-entity
            light="type:penumbra; castShadow:false;"
            decay=" 1"
            position="0 3.14 -4.55"
            intensity="0.1"
          />
          <a-entity
            light="type: point; intensity: 0.47"
            decay=" 1"
            position="0 3.14 -4.16395"
            intensity="1"
          />
          <a-box src="#fondo" position="0 3.49 -5" scale="5 7 6" depth="0.02" />
          <a-sphere
            position="0.89 0.49 -4.26"
            radius="0.3"
            material="src: #my-texture"
            shadow="receive: true"
            opacity="0.88"
          />
          <a-box
            position="1 0.2 -4"
            rotation="-90 -45 0  "
            width="1.5"
            height="1"
            depth="0.02"
            color="#fcfcfc"
            shadow="receive: true"
          />

          <a-plane
            position="-6 0 -4"
            rotation="-90 0 0"
            width="140"
            height="140"
            color="#7BC8A4"
            shadow="receive: true"
            opacity="0.3"
          />
        </a-scene>
      </>
    </div>
  );
}

export default Errar;
