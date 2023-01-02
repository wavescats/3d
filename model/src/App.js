import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import "./App.css";
import Bicycle from "./images/Bicycle";
import BicycleRotate from "./components/BicycleRotate";

function App() {
  return (
    <>
      <div className="container">
        <Canvas className="canvas">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={2} />
          <Suspense fallback={null}>
            <BicycleRotate />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

export default App;
