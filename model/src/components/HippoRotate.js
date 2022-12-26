import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import Hippo from "../images/Hippo";

function HippoRotate() {
  const hippoRef = useRef(null);

  useFrame(() => {
    hippoRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={hippoRef}>
      <Hippo />
    </mesh>
  );
}

export default HippoRotate;
