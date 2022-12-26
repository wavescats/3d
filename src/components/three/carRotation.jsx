import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import Car from "./car";

function carRotation() {
  const carRef = useRef(null);

  useFrame(() => {
    // 매 프레임마다 실행
    if (carRef.current) {
      // primitive를 참조
      carRef.current.rotation.x = 3;
      carRef.current.rotation.y += 0.005;
      carRef.current.rotation.z += 0.005;
    }
  });

  return <Car ref={carRef} />;
}

export default carRotation;
