import { Canvas } from "@react-three/fiber";
import React from "react";
import Box from "./components/Box";
import { OrbitControls } from "@react-three/drei";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Canvas className="canvas">
          <OrbitControls enableZoom={false} />
          {/* 3d 모델 제어기능 / enableZoom = 확대안되게막기 */}

          <ambientLight intensity={0.5} />
          {/* intensity = 밝기 강도 */}

          <directionalLight position={[-2, 5, 2]} intensity={1} />
          {/* directionalLight = 빛 방향 */}

          <Box />
        </Canvas>
      </div>
    </>
  );
}

export default App;
