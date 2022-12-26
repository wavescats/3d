import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Three from "./components/three";
import Car from "./components/three/carRotation";
import "./App.css";

function App() {
  return (
    <Canvas id="three-canvas-container" shadows>
      <Suspense fallback={null}>
        <Three />
        <Car />
      </Suspense>
    </Canvas>
  );
}

export default App;
