import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Box from "./components/Box";
import { OrbitControls } from "@react-three/drei";
import AnimatedSphere from "./components/AnimatedSphere";
import HippoRotate from "./components/HippoRotate";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Canvas className="canvas">
          <OrbitControls enableZoom={false} />
          {/* 3d 모델 제어기능 / enableZoom = 확대안되게막기 */}

          <ambientLight intensity={0.5} />
          {/* intensity = 밝기 강도 */}

          <directionalLight position={[-2, 5, 2]} intensity={1} />
          {/* directionalLight = 빛 방향 */}
          <Suspense fallback={null}>
            {/* 컨텐츠 검색을 못할경우 대비책 Suspense */}
            <Box />
          </Suspense>
        </Canvas>

        <Canvas className="canvas">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
            <AnimatedSphere />
          </Suspense>
        </Canvas>

        <Canvas className="canvas">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={2} />
          <Suspense fallback={null}>
            <HippoRotate />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

export default App;
