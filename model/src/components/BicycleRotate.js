import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import Bicycle from "../images/Bicycle";

function BicycleRotate() {
  const BicycleRef = useRef(null);

  useFrame(() => {
    BicycleRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={BicycleRef}>
      <Bicycle />
    </mesh>
  );
}

export default BicycleRotate;
