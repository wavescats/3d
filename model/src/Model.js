import { Canvas } from "@react-three/fiber";
import React from "react";
import CarRotation from "./CarRotation";
import "./App.css";

export default function Model() {
  return (
    <Canvas id="three-canvas-container">
      <ambientLight intensity={0.3} />
      <spotLight
        position={[100, 100, 1]}
        distence={200}
        intensity={3}
        angle={1}
      />
      <CarRotation />
    </Canvas>
  );
}
