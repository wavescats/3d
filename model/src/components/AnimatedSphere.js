import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      {/* args = 반지름, 너비, 높이 */}
      <MeshDistortMaterial
        color="#8352FD"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.5}
      />
      {/* distort 왜곡 / speed 왜곡속도 / roughness 거칠기*/}
    </Sphere>
  );
}

export default AnimatedSphere;
